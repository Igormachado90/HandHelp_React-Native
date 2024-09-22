import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RotinaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Rotina</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Painel')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default RotinaScreen;
