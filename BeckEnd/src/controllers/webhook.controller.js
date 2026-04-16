const { Assinatura } = require('../models');

// POST /api/webhook/pagamento — Recebe confirmação de pagamento
// Em produção: validar assinatura/chave secreta do provedor
const confirmarPagamento = async (req, res) => {
  try {
    const { external_id, status } = req.body;

    if (!external_id) {
      return res.status(400).json({ error: 'external_id é obrigatório.' });
    }

    const assinatura = await Assinatura.findOne({ where: { external_id } });

    if (!assinatura) {
      // Para testes: tenta buscar por ID direto
      const assinaturaPorId = await Assinatura.findByPk(external_id);
      if (!assinaturaPorId) {
        return res.status(404).json({ error: 'Assinatura não encontrada.' });
      }

      await assinaturaPorId.update({
        status: status || 'ativa',
        external_id: external_id,
      });

      return res.json({ message: 'Assinatura atualizada via ID.', assinatura: assinaturaPorId });
    }

    await assinatura.update({
      status: status || 'ativa',
    });

    res.json({ message: 'Pagamento confirmado. Assinatura atualizada.', assinatura });
  } catch (error) {
    console.error('Erro no webhook de pagamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { confirmarPagamento };
