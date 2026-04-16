const router = require('express').Router();
const { confirmarPagamento } = require('../controllers/webhook.controller');

router.post('/pagamento', confirmarPagamento); // POST /api/webhook/pagamento

module.exports = router;
