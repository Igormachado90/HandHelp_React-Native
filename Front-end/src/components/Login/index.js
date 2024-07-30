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
            const loginUrl = 'http://192.168.0.7:8082/auth/login';
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

            <View style={styles.BoxImag}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <View style={styles.containerButtText}>

                <Text style={styles.textTiliue}>Login</Text>

                <TextInput style={styles.inputBorder}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Digite seu email"
                    autoCapitalize="none"
                />

                <TextInput style={styles.inputBorder}
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    placeholder="Digite sua senha"
                />

                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        top: '15%'
    },
    BoxImag: {
        top: '5%',
        left: '10%'
    },
    textTiliue: {
        fontSize: 40,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: 38,
        marginBottom: 20
    },
    inputBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: "#0b8fac",
        borderWidth: 1,
        margin: 5,
        padding: 13,
        left: '8%',
        height: 50,
        width: 339,
    },
    button: {
        backgroundColor: '#0b8fac',
        padding: 13,
        borderRadius: 27,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        left: '6%',
        height: 50,
        width: 340,
        
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    containerButtText: {
        bottom: '6%'
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
    div: {
        bottom: '10'
    },
})
export default Login;