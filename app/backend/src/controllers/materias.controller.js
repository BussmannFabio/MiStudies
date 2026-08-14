const { Materia, Professor, Aula } = require('../models');

// GET /api/materias — Lista matérias públicas
const listar = async (req, res) => {
  try {
    const materias = await Materia.findAll({
      include: [
        {
          model: Professor,
          as: 'professor',
          attributes: ['id', 'nome', 'slug', 'foto_url'],
        },
      ],
      order: [['created_at', 'DESC']],
    });

    res.json(materias);
  } catch (error) {
    console.error('Erro ao listar matérias:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/materias/:id — Detalhes de uma matéria
const buscarPorId = async (req, res) => {
  try {
    const materia = await Materia.findByPk(req.params.id, {
      include: [
        {
          model: Professor,
          as: 'professor',
          attributes: ['id', 'nome', 'slug', 'foto_url'],
        },
        {
          model: Aula,
          as: 'aulas',
          where: { status: 'publicado' },
          required: false,
        },
      ],
    });

    if (!materia) {
      return res.status(404).json({ error: 'Matéria não encontrada.' });
    }

    res.json(materia);
  } catch (error) {
    console.error('Erro ao buscar matéria:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// POST /api/materias — Criar nova matéria
const criar = async (req, res) => {
  try {
    const { professor_id, nome, descricao, tags } = req.body;

    if (!professor_id || !nome) {
      return res.status(400).json({ error: 'professor_id e nome são obrigatórios.' });
    }

    // Verifica se professor existe
    const professor = await Professor.findByPk(professor_id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    const materia = await Materia.create({
      professor_id,
      nome,
      descricao: descricao || null,
      tags: tags || [],
    });

    res.status(201).json({ message: 'Matéria criada com sucesso.', materia });
  } catch (error) {
    console.error('Erro ao criar matéria:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// PUT /api/materias/:id — Editar matéria
const editar = async (req, res) => {
  try {
    const materia = await Materia.findByPk(req.params.id);
    if (!materia) {
      return res.status(404).json({ error: 'Matéria não encontrada.' });
    }

    const { nome, descricao, tags } = req.body;

    await materia.update({
      nome: nome || materia.nome,
      descricao: descricao !== undefined ? descricao : materia.descricao,
      tags: tags !== undefined ? tags : materia.tags,
    });

    res.json({ message: 'Matéria atualizada.', materia });
  } catch (error) {
    console.error('Erro ao editar matéria:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// DELETE /api/materias/:id — Remover matéria
const remover = async (req, res) => {
  try {
    const materia = await Materia.findByPk(req.params.id);
    if (!materia) {
      return res.status(404).json({ error: 'Matéria não encontrada.' });
    }

    await materia.destroy();
    res.json({ message: 'Matéria removida com sucesso.' });
  } catch (error) {
    console.error('Erro ao remover matéria:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { listar, buscarPorId, criar, editar, remover };
