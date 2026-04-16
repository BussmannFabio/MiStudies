const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Professor } = require('../models');

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { nome, email, senha, bio, foto_url, slug } = req.body;

    // Verifica se email já existe
    const existente = await Professor.findOne({ where: { email } });
    if (existente) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    // Verifica se slug já existe
    if (slug) {
      const slugExistente = await Professor.findOne({ where: { slug } });
      if (slugExistente) {
        return res.status(400).json({ error: 'Slug já em uso.' });
      }
    }

    // Hash da senha
    const senha_hash = await bcrypt.hash(senha, 10);

    // Gera slug automaticamente se não informado
    const slugFinal = slug || nome.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const professor = await Professor.create({
      nome,
      email,
      senha_hash,
      bio: bio || null,
      foto_url: foto_url || null,
      slug: slugFinal,
    });

    // Retorna sem a senha
    const { senha_hash: _, ...professorData } = professor.toJSON();

    res.status(201).json({ message: 'Professor cadastrado com sucesso.', professor: professorData });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const professor = await Professor.findOne({ where: { email } });
    if (!professor) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const senhaValida = await bcrypt.compare(senha, professor.senha_hash);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      { id: professor.id, email: professor.email },
      process.env.JWT_SECRET || 'segredo_dev_temporario',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    const { senha_hash: _, ...professorData } = professor.toJSON();

    res.json({ token, professor: professorData });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// GET /api/auth/me — sem middleware por enquanto, recebe id via query
const me = async (req, res) => {
  try {
    // Para testes sem middleware: passa ?id=UUID na query
    const id = req.query.id || req.professorId;
    if (!id) {
      return res.status(400).json({ error: 'Informe o id via query string (?id=...)' });
    }

    const professor = await Professor.findByPk(id, {
      attributes: { exclude: ['senha_hash'] },
    });

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    res.json(professor);
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = { register, login, me };
