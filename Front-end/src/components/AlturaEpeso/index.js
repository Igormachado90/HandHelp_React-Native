import React, { useState } from "react";
import axios from 'axios';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const AlturaEpeso = ({ navigation, route }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const { nome, email, senha, idade, tipoSanguineo, sexo, dob } = route.params;

    const handlNext = async () => {

        try {
            const URL = 'http://192.168.0.8:8082/auth/register';

            const dados = {
                nome,
                email,
                senha,
                sexo,
                dob, // Data de nascimento no formato ISO
                idade,
                tipoSanguineo,
                altura,
                peso
            };
            const resp = await axios.post(URL, dados);

            if (resp.data.message === 'Usuário registrado com sucesso!') {

                // Verificar a resposta do servidor
                console.log('Resposta do servidor:', resp.status);
                // Lidar com a resposta do servidor
                console.log('Dados enviados com sucesso:', resp.config.data);
                navigation.navigate('Painel', { nome, email, senha, idade, tipoSanguineo, altura, peso });

            }
        } catch (err) {
            // Lidar com erros
            console.error('Erro ao enviar dados para o servidor:', err);
        }
    };


    return (
        <View style={styles.container}>

            <View>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>Altura e peso</Text>
            <TextInput
                style={styles.Textinput}
                placeholder="Altura (cm)"
                value={altura}
                onChangeText={setAltura}
                keyboardType="numeric" />
            <TextInput
                style={styles.Textinput}
                placeholder="Peso (kg)"
                value={peso}
                onChangeText={setPeso}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.continueButton}
                onPress={handlNext} // * essa preciso trocar import é pasta
            >
                <Text style={styles.continueButtonText}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginBottom: 15,
        color: '#0b8fac',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
    },
    Textinput: {
        width: '80%',
        padding: 10,
        borderColor: '#0b8fac',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#0b8fac',
        paddingVertical: 15,
        borderRadius: 54,
        paddingHorizontal: 120,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default AlturaEpeso;