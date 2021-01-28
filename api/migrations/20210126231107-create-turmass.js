"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Turmasses",
      [
        {
          data_inicio: "2020-02-01",
          nivel: 1,
          docente: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel: 2,
          docente: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel: 3,
          docente: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-07-01",
          nivel: 3,
          docente: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Turmas", null, {});
  },
};
