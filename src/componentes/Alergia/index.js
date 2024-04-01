import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Email = ({navigation}) => {
    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>Tem alergia?</Text>
            <TextInput
                style={styles.Textinput}
                placeholder="Digital e-mail"
                keyboardType="email-address" />

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sangue')} // * essa preciso trocar import é pasta
            >
                <Text style={styles.buttonText}>Continuar</Text>
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
        fontSize: 32,//*
        paddingTop: 10,//!
        color: "#0b8fac",//*
        textAlign: "center",//*
        fontStyle: "normal", //*
        // fontWeight: "bold",
        lineHeight: 38, // *
    },
    Textinput: {
        borderRadius: 8,
        borderColor:"#0b8fac",
        borderWidth:1,
        height:40,
        margin: 12,
        paddingLeft: 10,
        color:"#0b8fac"
    },
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        paddingLeft: '25%',
        borderRadius: 54,
        margin: 12,
    },
    buttonText: {
        marginLeft: '20%',
        color: '#fff',
        fontSize: 18,
    },
})

export default Email;