const router = require('express').Router();
const { listar, buscarPorId, criar, editar, remover, publicar, minhasAulas } = require('../controllers/aulas.controller');

router.get('/me', minhasAulas);           // GET /api/aulas/me?id=UUID
router.get('/', listar);                  // GET /api/aulas (acervo público)
router.get('/:id', buscarPorId);          // GET /api/aulas/:id
router.post('/', criar);                  // POST /api/aulas
router.put('/:id', editar);              // PUT /api/aulas/:id
router.delete('/:id', remover);          // DELETE /api/aulas/:id
router.patch('/:id/publicar', publicar); // PATCH /api/aulas/:id/publicar

module.exports = router;
