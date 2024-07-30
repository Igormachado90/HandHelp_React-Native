import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PainelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao painel!</Text>
      {/* Adicione aqui os componentes e funcionalidades do seu painel */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  titulo: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
  },
});
export default PainelScreen;
