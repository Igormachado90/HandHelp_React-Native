import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { Video } from 'expo-av';

const ComVozScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { localSelecionados, intensidade } = route.params; // Desestruture apenas uma vez

  const textogerado = `Sintomas é ${localSelecionados.join(', ')}.\n\nIntensidade é ${intensidade}`;

  const falarTexto = (texto) => {
    Speech.speak(texto, {
      language: 'pt-BR',
      rate: 1.0,
      pitch: 1.0,
    });
  };

  const video = require('../Triagem/assets/videos/fala_texto_médico.mp4');

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Video
          source={video} // Recebe o caminho do vídeo
          style={styles.video}
          resizeMode="contain"
          shouldPlay={true}
          isLooping={true}
          onError={(error) => console.log('Error loading video:', error)} // Tratamento de erro
        />
      </View>

      {/* Área de Texto para Mensagem */}
      <View style={styles.textAreaContainer}>
        <Text>{textogerado}</Text>

        <TouchableOpacity style={styles.voiceButton} onPress={() => falarTexto(textogerado)}>
          <Text style={styles.voiceButtonText}>🎤 Aperte para Falar</Text>
        </TouchableOpacity>
      </View>

      {/* Botão "Continua" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Triagem_Fim')} // Substitua 'Triagem_Fim' pelo nome correto da próxima tela
      >
        <Text style={styles.buttonText}>Continua</Text>
      </TouchableOpacity>

      {/* Ícones de navegação no rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={{ uri: 'https://link-icone-home.png' }} // Substitua pelo link do ícone de casa
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image
            source={{ uri: 'https://link-icone-perfil.png' }} // Substitua pelo link do ícone de perfil
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
    width: 300,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  textAreaContainer: {
    width: '100%',
    marginBottom: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  voiceButton: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  voiceButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0b87ac',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 40,
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
  video: {
    width: '100%',
    height: '100%',
  },
});

export default ComVozScreen;
