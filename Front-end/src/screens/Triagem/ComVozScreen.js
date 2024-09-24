import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComVozScreen = () => {
  const [message, setMessage] = useState("I haven't been eating well lately, and I don't know why. My right foot also hurts so much, please help me, doc A!");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Parte superior com "Em breve!" */}
      <View style={styles.topSection}>
        <Image
          source={require('../Rotina/image/EmBreve.png')} // Substitua pelo link da imagem correta
          style={styles.image}
        />
      </View>

      {/* Área de Texto para Mensagem */}
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline={true}
          numberOfLines={4}
          editable={true}
        />
        <TouchableOpacity style={styles.voiceButton}>
          <Text style={styles.voiceButtonText}>🎤 Aperte para Falar</Text>
        </TouchableOpacity>
      </View>

      {/* Botão "Continua" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProximaTela')} // Substitua 'ProximaTela' pelo nome correto da próxima tela
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
  topSection: {
    marginBottom: 30,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
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
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    color: '#333',
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
    borderRadius: 10,
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
});

export default ComVozScreen;
