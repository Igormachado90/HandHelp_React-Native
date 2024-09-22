import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const profissao = [
    { id: '1', title: 'Dentista', image: require('../Rotina/image/EmBreve.png') },
    { id: '2', title: 'Nutricionista', image: require('../Rotina/image/EmBreve.png') },
    { id: '3', title: 'Psicólogo', image: require('../Rotina/image/EmBreve.png') },
    { id: '4', title: 'Farmaceutico', image: require('../Rotina/image/EmBreve.png') },
    { id: '5', title: 'Fisioterapeuta', image: require('../Rotina/image/EmBreve.png') },
    { id: '6', title: 'Veterinário', image: require('../Rotina/image/EmBreve.png') },
    { id: '7', title: 'Pré natal', image: require('../Rotina/image/EmBreve.png') },
    { id: '8', title: 'Serviço social', image: require('../Rotina/image/EmBreve.png') },
    { id: '9', title: 'Advogado', image: require('../Rotina/image/EmBreve.png') },
]

const RotinaScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RotinaFim', { profissao: item.title })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );

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
