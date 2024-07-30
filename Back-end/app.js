const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

// Rotas
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
    console.log('Olá HandHeld')
});

app.get('/', (request, response) => {
  return response.send("Olá mundo, bem-vindo!")
});

const PORT = process.env.PORT || 8082;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta http://localhost:${PORT}`);
});