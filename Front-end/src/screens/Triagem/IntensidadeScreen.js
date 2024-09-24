import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const IntensidadeScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const navigation = useNavigation();

  const getRatingText = (value) => {
    if (value < 20) return 'Muito Ruim';
    if (value >= 20 && value < 40) return 'Ruim';
    if (value >= 40 && value < 60) return 'Normal';
    if (value >= 60 && value < 80) return 'Bom';
    return 'Muito Bom';
  };

  return (
    <View style={styles.container}>
      {/* Parte superior com "Em breve!" */}
      <View style={styles.topSection}>
      <Image
          source={require('../Rotina/image/EmBreve.png')} // Substitua pelo link da imagem correta
          style={styles.image}
        />
      </View>

      {/* Slider com o texto */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderText}>{getRatingText(sliderValue)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#1fb28a"
        />
      </View>

      {/* Botão "Continua" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Voz')} // Substitua 'ProximaTela' pelo nome correto da próxima tela
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
  emBreveText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 40,
  },
  sliderText: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
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

export default IntensidadeScreen;
