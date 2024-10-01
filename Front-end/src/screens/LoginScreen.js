import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import api from '../services/api';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // URL de servidor para login
            const loginUrl = 'http://192.168.0.8:8082/auth/login';

            const response = await axios.post(loginUrl, {
                email,
                password,
            });
            if (response.status === 200) {

                // Armazene os dados do usuário (como um token de autenticação) em um armazenamento local (pode ser AsyncStorage)
                // const token  = response.data.token;
                // await AsyncStorage.setItem('userToken', token);

                // Realize ações após o login bem-sucedido, como redirecionar para outra página
                console.log('Login bem-sucedido:', response.data);
                navigation.navigate('Painel');

            }

            // const token = response.data.token

            // console.log('Token:', token);
            console.log('Login bem-sucedido:', response.data);
            // Lógica para armazenar o token e redirecionar para a próxima tela
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
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
            <Button title="Login" onPress={handleLogin} />
            {/* <Button title="Criar Conta" onPress={() => navigation.navigate('Registro')} /> */}
        </View>
    );
};

export default LoginScreen;
