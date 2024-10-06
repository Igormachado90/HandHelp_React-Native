import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const RotinaFim = ({ route }) => {
    const navigation = useNavigation();
    const { profissao, video } = route.params;

    // Para verificar se é o objeto correto
    console.log(profissao);

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {video ? (
                    <Video
                        source={video} // Recebe o caminho do vídeo
                        style={styles.video}
                        resizeMode="contain"
                        shouldPlay={true}
                        isLooping={true}
                        onError={(error) => console.log('Error loading video:', error)} // Tratamento de erro
                    />
                ) : (
                    <Image
                        source={require('../Rotina/image/EmBreve.png')} // Substitua pelo link da imagem correta
                        style={styles.image}
                    />
                )}
            </View>

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
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        backgroundColor: '#797979',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 90,
    },
    image: {
        width: 320,
        height: 320,
        borderRadius: 100,
        marginBottom: 90,
        // backgroundColor: '#E5F699',
    },
    video: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
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

export default RotinaFim;
