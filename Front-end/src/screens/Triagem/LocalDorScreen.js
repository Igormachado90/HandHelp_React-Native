import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocalDorScreen = () => {
  const navigation = useNavigation();
  const [localSelecionados, setLocalSelecionados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSymptoms, setCurrentSymptoms] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  const mostrarSintomas = (title, symptoms) => {
    setCurrentTitle(title);
    setCurrentSymptoms(symptoms);
    setModalVisible(true);
  };

  const alternarSintoma = (sintoma, sintomasTemp) => {
    setLocalSelecionados((prev) => {
      if (prev.includes(sintoma)) {
        return prev.filter((item) => item !== sintoma);
      } else {
        return [...prev, sintoma];
      }
    });
  };

  const buildPainButton = (top, left, title, symptoms, mostrarSintomas) => {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', top, left }}
        onPress={() => mostrarSintomas(title, symptoms)}
      >
        <View style={styles.painButton}>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Triagem/assets/image/Corpo.png')} // Substitua pelo link da imagem correta
        style={styles.image}
      />
      {buildPainButton(42, 79, 'Dor no Cabeça!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(68, 54, 'Dor no Ouvido!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(150, 88, 'Dor no Peito!', ['Tosse', 'Falta de ar', 'Chiado no peito'], mostrarSintomas)}
      {buildPainButton(68, 83.9, 'Dor no Olho!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(150, 295, 'Dor no Costa!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(285, 18, 'Dor no Mão!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(210, 85.5, 'Dor no barrigo!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(210, 290, 'Dor no Coluna!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}
      {buildPainButton(410, 260, 'Dor no pantruilho!', ['Symptom 1', 'Symptom 2'], mostrarSintomas)}

      <Text style={styles.title}>Local da dor</Text>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Intensidade', { localSelecionados })}
      >
        <Text style={styles.continuebuttonText}>continua</Text>
      </TouchableOpacity>


      {/* <View style={styles.footer}>
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
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{currentTitle}</Text>
            {currentSymptoms.map((sintoma) => (
              <Pressable
                key={sintoma}
                style={[
                  styles.continueButton,
                  localSelecionados.includes(sintoma) && styles.buttonSelected,
                ]}
                onPress={() => alternarSintoma(sintoma)}
              >
                <Text style={styles.textStyle}>{sintoma}</Text>
              </Pressable>
            ))}
            <Pressable
              style={[styles.continueButton, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
    width: 400,
    height: 500,
    // resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 49,
    color: '#0b8fac',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 32,
  },
  continueButton: {
    backgroundColor: '#0b87ac',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 54,
    marginBottom: 20,
  },
  continuebuttonText: {
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
  painButton: {
    width: 22,
    height: 22,
    // backgroundColor: 'red',
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  buttonSelected: {
    backgroundColor: 'grey',
  },
  buttonClose: {
    backgroundColor: '#129820',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LocalDorScreen;
