import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, Alert } from 'react-native';
// import api from '../services/api';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    try {
      const response = await axios.post('http://192.168.0.10:8082/auth/register', {
        username,
        email,
        password,
      });
      // Se a solicitação for bem-sucedida, exiba uma mensagem de sucesso e redirecione para a tela de login
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Registro concluído com sucesso!');
      }
      navigation.navigate('Painel');
    } catch (err) {
      // Se houver um erro, exiba uma mensagem de erro
      console.error('Erro ->', err);
      Alert.alert('Erro', err.message);
    }
  };

  return (
    <View>
      <Text>Nome de Usuário</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
        autoCapitalize="none"
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        autoCapitalize="none"
      />
      <Text>Senha</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
