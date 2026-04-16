const router = require('express').Router();
const { listar, minhaAssinatura, assinar, criarPlano } = require('../controllers/planos.controller');

router.get('/', listar);                          // GET /api/planos
router.get('/minha-assinatura', minhaAssinatura);  // GET /api/planos/minha-assinatura?id=UUID
router.post('/assinar', assinar);                  // POST /api/planos/assinar
router.post('/', criarPlano);                      // POST /api/planos (helper para criar planos em dev)

module.exports = router;
