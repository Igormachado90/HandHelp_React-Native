import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RotinaFimScreen = ({ route }) => {
    const navigation = useNavigation();
    const { profissao } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={require('../Rotina/image/EmBreve.png')} // Substitua pelo link da imagem correta
                style={styles.image}
            />
            <Text style={styles.badge}>ROTINA</Text>
            <Text style={styles.description}>
                Você será encaminhado para 
                <Text style={styles.descriptionProf}> {profissao}</Text>
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Painel')}
            >
                <Text style={styles.buttonText}>Voltar início  →</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    image: {
        width: 320,
        height: 320,
        borderRadius: 100,
        marginBottom: 90,
        // backgroundColor: '#E5F699',
    },
    badge: {
        backgroundColor: '#0B8FAC',
        color: '#fff',
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        marginBottom: 15,
    },
    description: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        fontStyle: 'normal',
        color: '#0B8FAC',
        marginBottom: 30,
    },
    descriptionProf: {
        color: '#7BC1B7',
    },
    button: {
        backgroundColor: '#0B8FAC',
        paddingVertical: 15,
        paddingHorizontal: 90,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default RotinaFimScreen;
