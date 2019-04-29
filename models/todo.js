'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    hooks : {
      beforeCreate : (todo, options) => {
         todo.userId = options.idUser
      }
    }
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.Employee, {foreignKey : 'userId'})
  };
  return Todo;
};