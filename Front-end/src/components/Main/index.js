import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "../Login";

const Main = ({ navigation }) => {
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

                <Text style={styles.textTiliue}>Login ou Cadastro?</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Nome')}
                    style={styles.buttonblack}>
                    <Text style={styles.buttonText}>Cadastro</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        top: '15%'
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
    BoxImag: {
        top: '5%',
        left: '10%'
    },
    containerButtText: {
        bottom: '3%'
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
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        borderRadius: 54,
        margin: 12,
        width: 300,
        height: 50,
        left: '10%',
    },
    buttonblack: {
        backgroundColor: '#000',
        paddingVertical: 10,
        borderRadius: 54,
        margin: 12,
        width: 300,
        height: 50,
        left: '10%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
})

export default Main;