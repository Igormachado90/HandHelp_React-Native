import React, {useState} from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";
// import { route } from "../../../../Back-end/routes/auth";

const Email = ({navigation, route}) => {
    const [email, setEmail] = useState('');

    const {nome} = route.params;

    const handleCadastro = () => {
        // Aqui você pode enviar os dados para o servidor, salvar localmente ou realizar outras ações
        console.log('Nome:', route.params.nome);
        console.log('Email:', email);
        navigation.navigate('Senha', {nome, email})
        
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

            <Text style={styles.textTiliue}>qual seu email?</Text>
            <TextInput
                style={styles.Textinput}                
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                />

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
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
        textAlign:'center',
        color: '#fff',
        fontSize: 18,
    },
})

export default Email;