const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plano = sequelize.define('Plano', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    // ex: "Essencial", "Pro", "Full Studio"
  },
  preco_mensal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  features: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
    // lista de features do plano ex: ["Upload ilimitado", "Suporte prioritário"]
  },
}, {
  tableName: 'planos',
});

module.exports = Plano;
