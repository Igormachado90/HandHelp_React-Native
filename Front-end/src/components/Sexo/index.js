import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Sexo = ({ navigation, route }) => {
    const [sexo, setSexo] = useState('');

    const { nome, email, senha } = route.params;

    const handleSelectSexo = (opcao) => {
        setSexo(opcao);
    };

    const handleNext = () => {
        console.log('Nome:', route.params.nome);
        console.log('Email:', route.params.email);
        console.log('Senha:', route.params.senha);
        console.log('Sexo selecionado:', sexo);
        // Aqui você pode fazer algo com o sexo selecionado, como enviar para o servidor
        navigation.navigate('DataDeNasci', { nome, email, senha, sexo })
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

            <Text style={styles.textTiliue}>Qual seu sexo:</Text>

            <View style={styles.Container}>
                
                    <TouchableOpacity style={styles.sexoItem} onPress={() => handleSelectSexo('M')}>
                        {/* <Image
                            source={require('./img/vectorHomem.png')}
                        /> */}
                        <Text>Homem</Text>
                    </TouchableOpacity>
                
                
                    <TouchableOpacity style={[
                        styles.sexoItem,
                        sexo === 'mulher' && styles.selectedButton,
                    ]} onPress={() => handleSelectSexo('F')}>
                        {/* <Image
                            source={require('./img/mdi-gender-male.png')}
                        /> */}
                        <Text>Mulher</Text>
                    </TouchableOpacity>
                
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={handleNext} // * essa import preciso trocar é pasta
            >
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
        fontSize: 32,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: 38,
        marginBottom: 15
    },
    Container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // selecao: {
    //     borderRadius: 8,
    //     borderColor: "#0b8fac",
    //     borderWidth: 1,
    //     width: 80,
    //     margin: 15,
    //     padding: 13,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // color: "#0b8fac"
    // },
    sexoItem: {
        padding: 20,
        margin: 10,
        backgroundColor: '#dfe4ea',
        borderRadius: 10,
    },
    selectedButton: {
        backgroundColor: '#70a1ff',
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

export default Sexo;