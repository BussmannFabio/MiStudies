const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./src/models');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API MiStudies!' });
});

// ─── Rotas da API ────────────────────────────────────────────────────────────
app.use('/api/auth',        require('./src/routes/auth.routes'));
app.use('/api/professores', require('./src/routes/professor.routes'));
app.use('/api/aulas',       require('./src/routes/aulas.routes'));
app.use('/api/materias',    require('./src/routes/materias.routes'));
app.use('/api/planos',      require('./src/routes/planos.routes'));
app.use('/api/webhook',     require('./src/routes/webhook.routes'));

// ─── Inicialização ────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com Supabase (PostgreSQL) estabelecida com sucesso.');

    // Em desenvolvimento, sync({ alter: true }) atualiza as tabelas sem dropar
    // Em produção, usar migrations do Sequelize
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Models sincronizados com o banco de dados.');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  }
};

start();
