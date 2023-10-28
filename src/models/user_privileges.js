'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userPrivileges extends Model {
    static associate (models) {
      userPrivileges.belongsTo(models.users, { as: 'users', foreignKey: 'user_id' });
      userPrivileges.belongsTo(models.privileges, { as: 'privileges', foreignKey: 'privilege_id' });
    }
  }
  userPrivileges.init({
    active: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'user_privileges'
  });
  return userPrivileges;
};