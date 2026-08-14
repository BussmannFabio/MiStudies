const { Plano, Assinatura, Professor } = require('../models');

// GET /api/planos — Lista todos os planos disponíveis
const listar = async (req, res) => {
  try {
    const planos = await Plano.findAll({
      order: [['preco_mensal', 'ASC']],
    });

    res.json(planos);
  } catch (error) {
    console.error('Erro ao listar planos:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/planos/minha-assinatura?id=UUID — Status da assinatura atual
const minhaAssinatura = async (req, res) => {
  try {
    const professor_id = req.query.id;
    if (!professor_id) {
      return res.status(400).json({ error: 'Informe o id via query string (?id=...)' });
    }

    const assinatura = await Assinatura.findOne({
      where: { professor_id, status: 'ativa' },
      include: [{ model: Plano, as: 'plano' }],
      order: [['data_inicio', 'DESC']],
    });

    if (!assinatura) {
      return res.json({ assinatura: null, message: 'Nenhuma assinatura ativa.' });
    }

    res.json({ assinatura });
  } catch (error) {
    console.error('Erro ao buscar assinatura:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// POST /api/planos/assinar — Inicia processo de assinatura
const assinar = async (req, res) => {
  try {
    const { professor_id, plano_id } = req.body;

    if (!professor_id || !plano_id) {
      return res.status(400).json({ error: 'professor_id e plano_id são obrigatórios.' });
    }

    const professor = await Professor.findByPk(professor_id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    const plano = await Plano.findByPk(plano_id);
    if (!plano) {
      return res.status(404).json({ error: 'Plano não encontrado.' });
    }

    // Verifica se já tem assinatura ativa
    const assinaturaAtiva = await Assinatura.findOne({
      where: { professor_id, status: 'ativa' },
    });

    if (assinaturaAtiva) {
      return res.status(400).json({ error: 'Já existe uma assinatura ativa. Cancele antes de assinar outro plano.' });
    }

    const assinatura = await Assinatura.create({
      professor_id,
      plano_id,
      status: 'pendente', // Fica pendente até confirmação do webhook
      data_inicio: new Date(),
    });

    res.status(201).json({
      message: 'Assinatura criada com status pendente. Aguardando confirmação de pagamento.',
      assinatura,
    });
  } catch (error) {
    console.error('Erro ao assinar plano:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// ─── Rotas auxiliares para testes / seed ──────────────────────────────────────

// POST /api/planos — Criar um plano (para popular o banco em dev)
const criarPlano = async (req, res) => {
  try {
    const { nome, preco_mensal, descricao, features } = req.body;

    if (!nome || preco_mensal === undefined) {
      return res.status(400).json({ error: 'nome e preco_mensal são obrigatórios.' });
    }

    const plano = await Plano.create({
      nome,
      preco_mensal,
      descricao: descricao || null,
      features: features || [],
    });

    res.status(201).json({ message: 'Plano criado com sucesso.', plano });
  } catch (error) {
    console.error('Erro ao criar plano:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { listar, minhaAssinatura, assinar, criarPlano };
