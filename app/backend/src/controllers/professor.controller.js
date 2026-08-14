const { Professor, Materia, Aula, Assinatura, Plano } = require('../models');

// GET /api/professores/:slug — Perfil público do professor
const getBySlug = async (req, res) => {
  try {
    const professor = await Professor.findOne({
      where: { slug: req.params.slug },
      attributes: { exclude: ['senha_hash'] },
      include: [
        { model: Materia, as: 'materias' },
        {
          model: Aula,
          as: 'aulas',
          where: { status: 'publicado' },
          required: false,
        },
      ],
    });

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    res.json(professor);
  } catch (error) {
    console.error('Erro ao buscar professor por slug:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// PUT /api/professores/me — Atualizar perfil (sem middleware, usa body.id)
const updateMe = async (req, res) => {
  try {
    const { id, nome, bio, foto_url, slug } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Informe o id no body.' });
    }

    const professor = await Professor.findByPk(id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    // Se está mudando o slug, verifica duplicidade
    if (slug && slug !== professor.slug) {
      const slugExistente = await Professor.findOne({ where: { slug } });
      if (slugExistente) {
        return res.status(400).json({ error: 'Slug já em uso.' });
      }
    }

    await professor.update({
      nome: nome || professor.nome,
      bio: bio !== undefined ? bio : professor.bio,
      foto_url: foto_url !== undefined ? foto_url : professor.foto_url,
      slug: slug || professor.slug,
    });

    const { senha_hash: _, ...professorData } = professor.toJSON();
    res.json({ message: 'Perfil atualizado.', professor: professorData });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/professores/me/dashboard — Dashboard do professor (sem middleware, usa query.id)
const dashboard = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).json({ error: 'Informe o id via query string (?id=...)' });
    }

    const professor = await Professor.findByPk(id, {
      attributes: { exclude: ['senha_hash'] },
      include: [
        { model: Materia, as: 'materias' },
        { model: Aula, as: 'aulas' },
        {
          model: Assinatura,
          as: 'assinaturas',
          include: [{ model: Plano, as: 'plano' }],
        },
      ],
    });

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    // Stats resumidas
    const totalAulas = professor.aulas.length;
    const aulasPublicadas = professor.aulas.filter(a => a.status === 'publicado').length;
    const totalVisualizacoes = professor.aulas.reduce((sum, a) => sum + (a.visualizacoes || 0), 0);

    res.json({
      professor,
      stats: {
        totalAulas,
        aulasPublicadas,
        aulasRascunho: totalAulas - aulasPublicadas,
        totalVisualizacoes,
        totalMaterias: professor.materias.length,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar dashboard:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { getBySlug, updateMe, dashboard };
