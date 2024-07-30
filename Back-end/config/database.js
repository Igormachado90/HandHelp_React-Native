const { Sequelize } = require('sequelize');

//* Configurações de conexão com banco de dados MySQL

const connection = new Sequelize(
  {
  host: 'localhost',
  dialect: 'mysql', // Tipo banco de dados que está sendo usado (MySQL)
  username: 'root', 
  password: 'igor12341234', 
  database: 'hand_banco_de_dados', 
  // logging: console.log, //! Pode definir como false para desativar o log ou console.log para ativar
  define: {
    timestamps: true,
    underscored:true,
  }
});

//* Conectar banco de dados
connection.authenticate()
  .then(() => {
    console.log('>>>>>>>>>>> Conectado ao banco de dados MySQL. <<<<<<<<<<<<<<');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = connection;
