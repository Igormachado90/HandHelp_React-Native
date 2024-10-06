import axios from "axios";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //* ou pode faz simples isso é
    // const [login, setLogin] = useState({
    //     email: "",
    //     senha: "",
    // })

    const handleLogin = async () => {
        try {
            // URL de servidor para login
            const loginUrl = 'http://192.168.0.10:8082/auth/login';
            const response = await axios.post(loginUrl, {
                email,
                senha,
            });
            if (response.status === 200) {

                // Realize ações após o login bem-sucedido, como redirecionar para outra página
                // Alert.alert('Login: ' + response.data.message);
                // console.log('login é sucedido: ', {
                //     'message': response.data.message,
                //     'status': response.status
                // });
                navigation.navigate('Painel');
            }
        } catch (err) {
            Alert.alert('Falha no login: \n'+ err.response.data.message);
            console.log('Falha no login: ', {
                'message': err.response.data.message,
                'status': err.response.status
            });
        }
    };

    return (
        <View style={styles.Container}>

            <View>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

                <Text style={styles.textTiliue}>Login</Text>

                <TextInput style={styles.Textinput}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Digite seu email"
                    autoCapitalize="none"
                />

                <TextInput style={styles.Textinput}
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    placeholder="Digite sua senha"
                />

                <TouchableOpacity onPress={handleLogin} style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Login</Text>
                </TouchableOpacity>

            
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    BoxContainer: {
        height: 330,
        width: 330,
        backgroundColor: "#0B8FAC",
        borderRadius: 200,
        bottom: 200,
        right: 150,
        position: "relative"
    },
    imagem: {
        width: 320,
        height: 320,
        bottom: 120,
        position: "absolute",
    },
    textTiliue: {
        fontSize: 18,
        marginBottom: 10,
        color: '#0b8fac',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
    },
    Textinput: {
        width: '80%',
        padding: 8,
        borderColor: '#0b8fac',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        borderRadius: 54,
        paddingHorizontal: 120,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
    },
})
export default Login;