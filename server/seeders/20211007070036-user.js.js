'use strict';
const bcrypt = require ("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        email: 'rauf@gmail.com',
        password: bcrypt.hashSync("123abc", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
