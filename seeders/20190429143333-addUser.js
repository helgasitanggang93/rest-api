'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Employees', [{
          username: 'jamidun123',
          password: '$2a$10$wIu7e3FyKo5mwSnpH8l46OGeXrYv7jY66DQFkG5KTgUB9Bvzx1DEm',
          role: 'dokter',
          createdAt : new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Employees', null, {});
  }
};
