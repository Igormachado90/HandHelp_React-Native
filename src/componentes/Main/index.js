import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "../Login";

const Main = ({ navigation }) => {
    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <View style={styles.div1}>

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
    div1: {
        top: '10%'
    },
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        paddingLeft: '25%',
        borderRadius: 54,
        margin: 12,
        height: 52
    },
    buttonblack: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingLeft: '25%',
        borderRadius: 54,
        margin: 12,
        height: 52
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: '15%'
    },
})

export default Main;