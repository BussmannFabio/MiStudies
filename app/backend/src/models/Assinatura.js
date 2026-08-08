const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Assinatura = sequelize.define('Assinatura', {
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
  plano_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'planos',
      key: 'id',
    },
    onDelete: 'RESTRICT', // não deleta plano se tiver assinatura vinculada
  },
  status: {
    type: DataTypes.ENUM('ativa', 'cancelada', 'pendente'),
    allowNull: false,
    defaultValue: 'pendente',
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: true, // nullable — mensal recorrente não tem data de fim fixa
  },
  external_id: {
    type: DataTypes.STRING,
    allowNull: true,
    // ID da assinatura no provedor de pagamento (Stripe/Hotmart/Pagar.me)
  },
}, {
  tableName: 'assinaturas',
});

module.exports = Assinatura;
