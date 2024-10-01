
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


//ROTAS

// Rota para cadastro de usuário
router.post('/register', async (req, res) => {
  console.log(req.body)
  try {
    const { nome, email, senha, sexo, dob, idade, tipoSanguineo, altura, peso } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const newUser= await User.create({ 
      nome, 
      email, 
      senha: hashedPassword,
      sexo,
      data_nascimento: dob,
      idade,
      tipo_sanguineo: tipoSanguineo,
      altura,
      peso
    });
    res.status(200).json({ message: 'Usuário registrado com sucesso!', newUser });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ AxiosError: 'Erro interno do servidor.', error});
  }
});


// Rota para longi de usuário
router.post('/login', async (req, res) => {

  const { email, senha } = req.body;
  try {
    
    //* const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = await User.findOne({ where: { email } });
    
    // * if (user.length === 0) {
    // *   return res.status(401).json({ message: 'Nome de usuário ou senha incorretos.' });
    // * }
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou senha é incorreta!' });
    }
    
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', {expiresIn: '1h'});
    res.status(200).json({ message: 'Login bem-sucedido!', token, user });

  } catch (error) {
    console.log('Erro ---> ',error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

module.exports = router;
