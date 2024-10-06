import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, DatePickerAndroid, View, Image, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
// import { route } from "../../../../Back-end/routes/auth";

const DataDeNasci = ({ navigation, route }) => {
    const [date, setDate] = useState(new Date());
    const [mostar, setMostar] = useState(false);

    const { nome, email, senha, sexo } = route.params;

    const handleNext = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Sexo selecionado:', sexo);
        console.log('Data de Nascimento:', date);


        // Convertendo a data para o formato DD/MM/YYYY
        const day = date.getDate();
        const month = date.getMonth() + 1; // Meses começam do 0 em JavaScript
        const year = date.getFullYear();

        // Formatando a data no formato DD/MM/YYYY
        const dobString = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
        
        navigation.navigate('Idade', { nome, email, senha, sexo, date: dobString });
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setMostar(false);
        setDate(currentDate);
    };

    const mostrarDatePicker = () => {
        setMostar(true);
    };

    const formatDate = (date) => {
        const months = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    };

    return (
        <View style={styles.container}>

            <View>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("../image/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <Text style={styles.label}>Data de Nascimento</Text>

            <TouchableOpacity onPress={mostrarDatePicker} style={styles.dateInput}>
                <Text style={styles.dateText}>{formatDate(date)}</Text>
            </TouchableOpacity>

            {mostar && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}

            <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
                <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    BoxContainer: {
        height: 330,
        width: 330,
        backgroundColor: "#0B8FAC",
        borderRadius: 200,
        bottom: 200,
        right: 150,
        position: "relative"
    },
    imagem: {
        width: 320,
        height: 320,
        bottom: 120,
        position: "absolute",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#0b8fac',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
    },
    dateText: {
        fontSize: 16,
    },
    dateInput: {
        width: '80%',
        padding: 15,
        borderColor: '#0b8fac',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#0b8fac',
        paddingVertical: 15,
        borderRadius: 54,
        paddingHorizontal: 120,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
    },

})

export default DataDeNasci;