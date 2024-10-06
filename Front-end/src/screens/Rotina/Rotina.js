import React, { useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

const profissao = [
  { id: '1', title: 'Dentista', video: require('../Rotina/videos/Dentistaa.mp4') },
  { id: '2', title: 'Nutricionista', video: require('../Rotina/videos/nutricionista.mp4') },
  { id: '3', title: 'Psicólogo', video: require('../Rotina/videos/psicólogo.mp4') },
  { id: '4', title: 'Farmaceutico', image: require('../Rotina/image/EmBreve.png') },
  { id: '5', title: 'Fisioterapeuta', video: require('../Rotina/videos/fisioterapeuta.mp4') },
  { id: '6', title: 'Veterinário', image: require('../Rotina/image/EmBreve.png') },
  { id: '7', title: 'Pré natal', video: require('../Rotina/videos/pré natal.mp4') },
  { id: '8', title: 'Serviço social', video: require('../Rotina/videos/serviço social.mp4') },
  { id: '9', title: 'Advogado', image: require('../Rotina/image/EmBreve.png') },
]

const RotinaScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        console.log('Navigating with:', { profissao: item.title, video: item.video }); // Log antes de navegar
        navigation.navigate('RotinaFim', { profissao: item.title, video: item.video });
      }}
    >
      {item.video ? (
        <Video
          source={item.video}
          style={styles.video}
          resizeMode="cover"
          isMuted={true}
          shouldPlay={true}
          isLooping={true}
        />
      ) : (
        <Image source={item.image} style={styles.image} />
      )}
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={profissao}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  video: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 56,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 56,
  },
  text: {
    fontSize: 18,
  }
});

export default RotinaScreen;
