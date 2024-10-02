'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class branches extends Model {
    static associate(models) {
      this.belongsTo(models.municipalities, { as: 'municipio', foreignKey: 'municipality_id' });
    }
  }

  branches.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'branches'
  });

  return branches;
};
