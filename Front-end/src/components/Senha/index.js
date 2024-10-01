import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Senha = ({navigation, route }) => {
    const [senha, setSenha] = useState('');

    const {nome, email} = route.params;

    const handleNext = () => {
        console.log('Nome:', route.params.nome);
        console.log('Email:', route.params.email);
        console.log('Senha:', senha);
        navigation.navigate('Sexo', { nome, email, senha });
      };

    return (
        <View style={styles.container}>

            <View>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("../image/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>Qual seu senha?</Text>
            <TextInput
                style={styles.Textinput}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry />

            <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
                <Text style={styles.continueButtonText}>Continuar</Text>
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
        marginBottom: 10,
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
        marginBottom: 30,
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

export default Senha;