const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aula = sequelize.define('Aula', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  professor_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'professores',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  materia_id: {
    type: DataTypes.UUID,
    allowNull: true, // nullable — aula pode não ter matéria
    references: {
      model: 'materias',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tier: {
    type: DataTypes.ENUM('essencial', 'pro', 'full_studio'),
    allowNull: false,
    defaultValue: 'essencial',
  },
  status: {
    type: DataTypes.ENUM('rascunho', 'em_producao', 'publicado'),
    allowNull: false,
    defaultValue: 'rascunho',
  },
  arquivo_url: {
    type: DataTypes.STRING,
    allowNull: true,
    // caminho do HTML/PDF armazenado
  },
  tags: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
  },
  visualizacoes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  published_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'aulas',
});

module.exports = Aula;
