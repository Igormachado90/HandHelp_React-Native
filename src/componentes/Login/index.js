import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Nome from "../Nome";

const Login = () => {
    return (
        <View>

            <View style={styles.div1}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <View style={styles.div}>

                <Text style={styles.textTiliue}>Login</Text>

                <TextInput style={styles.inputBorder}
                    placeholder="seu email"
                    keyboardType="email-address" />

                <TextInput style={styles.inputBorder}
                    placeholder="senha"
                    keyboardType="visible-password" />

                <TouchableOpacity style={styles.button} onPress={Nome}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textTiliue: {
        fontSize: 50,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal", 
        fontWeight: "800",
        lineHeight: 38, 
        marginBottom: 35
    },
    inputBorder: {
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
        textAlign:'center',
        color: '#fff',
        fontSize: 18,
    },
    div: {
        top: '20%'
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