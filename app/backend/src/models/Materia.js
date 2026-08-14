const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Materia = sequelize.define('Materia', {
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
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    // ex: "Gestão da Produção"
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tags: {
    type: DataTypes.JSONB, // JSONB no Postgres para melhor performance
    allowNull: true,
    defaultValue: [],
    // ex: ["Engenharia", "Lean"]
  },
}, {
  tableName: 'materias',
});

module.exports = Materia;
