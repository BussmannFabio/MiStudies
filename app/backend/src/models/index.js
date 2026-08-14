const sequelize = require('../config/database');

const Professor  = require('./Professor');
const Materia    = require('./Materia');
const Aula       = require('./Aula');
const Plano      = require('./Plano');
const Assinatura = require('./Assinatura');

// ─── Associações ─────────────────────────────────────────────────────────────

// Professor → Materia (1:N)
Professor.hasMany(Materia, { foreignKey: 'professor_id', as: 'materias', onDelete: 'CASCADE' });
Materia.belongsTo(Professor, { foreignKey: 'professor_id', as: 'professor' });

// Professor → Aula (1:N)
Professor.hasMany(Aula, { foreignKey: 'professor_id', as: 'aulas', onDelete: 'CASCADE' });
Aula.belongsTo(Professor, { foreignKey: 'professor_id', as: 'professor' });

// Materia → Aula (1:N, nullable)
Materia.hasMany(Aula, { foreignKey: 'materia_id', as: 'aulas', onDelete: 'SET NULL' });
Aula.belongsTo(Materia, { foreignKey: 'materia_id', as: 'materia' });

// Professor → Assinatura (1:N)
Professor.hasMany(Assinatura, { foreignKey: 'professor_id', as: 'assinaturas', onDelete: 'CASCADE' });
Assinatura.belongsTo(Professor, { foreignKey: 'professor_id', as: 'professor' });

// Plano → Assinatura (1:N)
Plano.hasMany(Assinatura, { foreignKey: 'plano_id', as: 'assinaturas', onDelete: 'RESTRICT' });
Assinatura.belongsTo(Plano, { foreignKey: 'plano_id', as: 'plano' });

// ─── Exportações ──────────────────────────────────────────────────────────────

module.exports = {
  sequelize,
  Professor,
  Materia,
  Aula,
  Plano,
  Assinatura,
};
