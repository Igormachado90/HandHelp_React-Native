import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const Pressao = ({ navigation }) => {

    const selecaoBlack = () => {
        if (Text !== true) {
            return <TouchableOpacity style={{backgroundColor: '#000',
            paddingVertical: 10,
            borderRadius: 54,
            margin: 12,
            width: 300,
            height: 50,
            left: '10%',}}/>
            
        }
    }

    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>pressão alta?</Text>
            <TextInput
                style={styles.Textinput}
                placeholder="Digital"
                keyboardType="default" />

            <TouchableOpacity
                style={styles.button}
                onPress={selecaoBlack}
            >
                <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            // onPress={() => navigation.navigate('Diabete')}
            >
                <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            // onPress={() => navigation.navigate('Diabete')}
            >
                <Text style={styles.buttonText}>Prefiro não dizer</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Diabete')}
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

export default Pressao;