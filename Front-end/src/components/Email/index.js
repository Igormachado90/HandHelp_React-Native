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
        <View style={styles.container}>

            <View>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.textTiliue}>Qual seu email?</Text>
            <TextInput
                style={styles.Textinput}                
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                />

            <TouchableOpacity style={styles.continueButton} onPress={handleCadastro}>
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

export default Email;