import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Idade = ({navigation, route}) => {
    const [idade, setIdade] = useState('');
    const dobString = route.params && route.params.dob ? route.params.dob : '';
    const {nome, email, senha, sexo} = route.params;
    

    const handleNext = () => {
        // Here you can send the data to the server, save locally, or perform other actions
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Sexo selecionado:', sexo);
        console.log('Data de Nascimento:', dobString);
        console.log('Idade:', idade);
        navigation.navigate('Sangue', { nome, email, senha, sexo, dob: dobString, idade });
        // Navigate to the next screen or perform other actions
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

            <Text style={styles.textTiliue}>Idade</Text>
            <TextInput
                style={styles.Textinput}
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
                keyboardType="numeric" />

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

export default Idade;