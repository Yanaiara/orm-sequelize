'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmass = sequelize.define('Turmass', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmass.associate = function(models) {
    Turmass.hasMany(models.Matriculas, {
      foreignKey: 'turma_id'
    })
    Turmass.belongsTo(models.Pessoas, {
      foreignKey: 'docente_id'
    })
    Turmass.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id'
    });
  };
  return Turmass;
};