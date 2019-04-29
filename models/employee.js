'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        let hash = bcrypt.hashSync(`${user.password}/\/`, salt);
        user.password = hash

      }
    }
  });
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.hasMany(models.Todo, {foreignKey: 'userId'})
  };
  return Employee;
};