const router = require('express').Router();
const { listar, buscarPorId, criar, editar, remover } = require('../controllers/materias.controller');

router.get('/', listar);           // GET /api/materias
router.get('/:id', buscarPorId);   // GET /api/materias/:id
router.post('/', criar);           // POST /api/materias
router.put('/:id', editar);        // PUT /api/materias/:id
router.delete('/:id', remover);    // DELETE /api/materias/:id

module.exports = router;
