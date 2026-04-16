const router = require('express').Router();
const { getBySlug, updateMe, dashboard } = require('../controllers/professor.controller');

router.get('/me/dashboard', dashboard);  // GET /api/professores/me/dashboard?id=UUID
router.put('/me', updateMe);             // PUT /api/professores/me (id no body)
router.get('/:slug', getBySlug);         // GET /api/professores/:slug

module.exports = router;
