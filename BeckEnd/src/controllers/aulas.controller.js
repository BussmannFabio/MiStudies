const { Aula, Professor, Materia } = require('../models');

// GET /api/aulas — Acervo público (só aulas publicadas)
const listar = async (req, res) => {
  try {
    const aulas = await Aula.findAll({
      where: { status: 'publicado' },
      include: [
        {
          model: Professor,
          as: 'professor',
          attributes: ['id', 'nome', 'slug', 'foto_url'],
        },
        {
          model: Materia,
          as: 'materia',
          attributes: ['id', 'nome'],
        },
      ],
      order: [['published_at', 'DESC']],
    });

    res.json(aulas);
  } catch (error) {
    console.error('Erro ao listar aulas:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/aulas/:id — Detalhes de uma aula (pública)
const buscarPorId = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id, {
      include: [
        {
          model: Professor,
          as: 'professor',
          attributes: ['id', 'nome', 'slug', 'foto_url', 'bio'],
        },
        {
          model: Materia,
          as: 'materia',
        },
      ],
    });

    if (!aula) {
      return res.status(404).json({ error: 'Aula não encontrada.' });
    }

    // Incrementa visualizações
    await aula.increment('visualizacoes');

    res.json(aula);
  } catch (error) {
    console.error('Erro ao buscar aula:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// POST /api/aulas — Criar nova aula
const criar = async (req, res) => {
  try {
    const { professor_id, materia_id, titulo, descricao, tier, arquivo_url, tags } = req.body;

    if (!professor_id || !titulo) {
      return res.status(400).json({ error: 'professor_id e titulo são obrigatórios.' });
    }

    const professor = await Professor.findByPk(professor_id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    // Verifica matéria se informada
    if (materia_id) {
      const materia = await Materia.findByPk(materia_id);
      if (!materia) {
        return res.status(404).json({ error: 'Matéria não encontrada.' });
      }
    }

    const aula = await Aula.create({
      professor_id,
      materia_id: materia_id || null,
      titulo,
      descricao: descricao || null,
      tier: tier || 'essencial',
      status: 'rascunho',
      arquivo_url: arquivo_url || null,
      tags: tags || [],
    });

    res.status(201).json({ message: 'Aula criada com sucesso.', aula });
  } catch (error) {
    console.error('Erro ao criar aula:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// PUT /api/aulas/:id — Editar dados da aula
const editar = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (!aula) {
      return res.status(404).json({ error: 'Aula não encontrada.' });
    }

    const { titulo, descricao, tier, materia_id, arquivo_url, tags } = req.body;

    await aula.update({
      titulo: titulo || aula.titulo,
      descricao: descricao !== undefined ? descricao : aula.descricao,
      tier: tier || aula.tier,
      materia_id: materia_id !== undefined ? materia_id : aula.materia_id,
      arquivo_url: arquivo_url !== undefined ? arquivo_url : aula.arquivo_url,
      tags: tags !== undefined ? tags : aula.tags,
    });

    res.json({ message: 'Aula atualizada.', aula });
  } catch (error) {
    console.error('Erro ao editar aula:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// DELETE /api/aulas/:id — Remover aula
const remover = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (!aula) {
      return res.status(404).json({ error: 'Aula não encontrada.' });
    }

    await aula.destroy();
    res.json({ message: 'Aula removida com sucesso.' });
  } catch (error) {
    console.error('Erro ao remover aula:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// PATCH /api/aulas/:id/publicar — Publicar aula
const publicar = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (!aula) {
      return res.status(404).json({ error: 'Aula não encontrada.' });
    }

    if (aula.status === 'publicado') {
      return res.status(400).json({ error: 'Aula já está publicada.' });
    }

    await aula.update({
      status: 'publicado',
      published_at: new Date(),
    });

    res.json({ message: 'Aula publicada com sucesso.', aula });
  } catch (error) {
    console.error('Erro ao publicar aula:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/aulas/me — Minhas aulas (sem middleware, usa query.id)
const minhasAulas = async (req, res) => {
  try {
    const professor_id = req.query.id;
    if (!professor_id) {
      return res.status(400).json({ error: 'Informe o id via query string (?id=...)' });
    }

    const aulas = await Aula.findAll({
      where: { professor_id },
      include: [
        {
          model: Materia,
          as: 'materia',
          attributes: ['id', 'nome'],
        },
      ],
      order: [['created_at', 'DESC']],
    });

    res.json(aulas);
  } catch (error) {
    console.error('Erro ao buscar minhas aulas:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { listar, buscarPorId, criar, editar, remover, publicar, minhasAulas };
