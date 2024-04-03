import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Sexo = ({ navigation }) => {
    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>qual seu sexo?</Text>
            
            <View style={styles.Container}>
                <View style={styles.selecao}>
                    <Image 
                        style={styles.vectorImg1}
                        source={require('./img/vectorHomem.png')}
                    />
                    <Text>Homem</Text>
                </View>
                <View style={styles.selecao}>
                    <Image 
                        style={styles.vectorImg}
                        source={require('./img/mdi-gender-male.png')}
                    />
                    <Text>Mulher</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DataDeNasci')} // * essa import preciso trocar é pasta
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
        fontSize: 32,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal", 
        fontWeight: "800",
        lineHeight: 38, 
        marginBottom: 35
    },
    Container: {
        display: "flex",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selecao: {
        borderRadius: 8,
        borderColor: "#0b8fac",
        borderWidth: 1,
        width: 80,
        margin: 15,
        padding: 13,
        alignItems: 'center',
        justifyContent: 'center',
        // color: "#0b8fac"
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
    vectorImg: {
        height: 44,
        width:44
    },
    vectorImg1: {
        height: 33,
        width: 22,
    }
})

export default Sexo;