const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User_1', {
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
  sexo: {
    type: Sequelize.ENUM('F','M'),
    allowNull: false
  },
  data_nascimento: Sequelize.DATE,
  idade: Sequelize.INTEGER,
  tipo_sanguineo: Sequelize.STRING,
  altura: Sequelize.FLOAT,
  peso: Sequelize.FLOAT
  }, {
    timestamps: false,
});

// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

module.exports = User;
