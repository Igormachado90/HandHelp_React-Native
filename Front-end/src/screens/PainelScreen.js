import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={require('../screens/Rotina/image/EmBreve.png')} // URL da sua imagem ou caminho local
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Escolha um atendimento</Text>

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('LocalDor')}>
        <Text style={styles.buttonText}>Triagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Rotina')}>
        <Text style={styles.buttonTextSecondary}>Rotina</Text>
      </TouchableOpacity>

      

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    backgroundColor: '#E5F699',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#0b87ac',
  },
  buttonPrimary: {
    backgroundColor: '#0b87ac',
    paddingVertical: 15,
    paddingHorizontal: 125,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 25,
  },
  buttonTextSecondary: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  icon: {
    fontSize: 24,
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    marginHorizontal: 2,
  },
  dotActive: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
export default HomeScreen;
