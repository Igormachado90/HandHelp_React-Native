import React, { useState } from "react";
import axios from 'axios';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const AlturaEpeso = ({ navigation, route }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const { nome, email, senha, idade, tipoSanguineo, sexo, dob } = route.params;

    const handlNext = async () => {

        try {
            const URL = 'http://192.168.0.7:8082/auth/register';

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
            const resposta = await axios.post(URL, dados);

            // Verificar a resposta do servidor
            console.log('Resposta do servidor:', resposta.data);
            // Lidar com a resposta do servidor
            console.log('Dados enviados com sucesso:', resposta.data);
            navigation.navigate('Painel', { nome, email, senha, idade, tipoSanguineo, altura, peso });
        } catch (err) {
            // Lidar com erros
            console.error('Erro ao enviar dados para o servidor:', err);
        }
    };
    

    return (
        <View>

            <View style={styles.div}>
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
                style={styles.button}
                onPress={handlNext} // * essa preciso trocar import é pasta
            >
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
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
    textTiliue: {
        fontSize: 32,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: 38,
        marginBottom: 35
    },
    Textinput: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: "#0b8fac",
        borderWidth: 1,
        margin: 15,
        padding: 13,
        left: '5%',
        height: 50,
        width: 339,
    },
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        borderRadius: 54,
        margin: 12,
        width: 300,
        height: 50,
        left: '10%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
})

export default AlturaEpeso;