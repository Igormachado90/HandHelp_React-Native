import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, DatePickerAndroid, View, Image, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
// import { route } from "../../../../Back-end/routes/auth";

const DataDeNasci = ({ navigation, route }) => {
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const { nome, email, senha, sexo } = route.params;

    const handleNext = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Sexo selecionado:', sexo);
        console.log('Data de Nascimento:', dob);

        // Convertendo a data para uma string no formato ISO
        const dobString = dob.toISOString();

        navigation.navigate('Idade', { nome, email, senha, sexo, dob: dobString });
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        const selectedDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        setShowDatePicker(false);
        setDob(selectedDateWithoutTime);
    };

    return (
        <View>

            <View style={styles.div}>
                <View style={styles.BoxContainer}></View>
                <Image
                    source={require("./img/EmBreve.png")}
                    style={styles.imagem}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.buttonText}>Selecionar Data de Nascimento</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    testID="datePicker"
                    value={dob}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}

            <Text>Data de Nascimento: {dob.toLocaleDateString()}</Text>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
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
    div: {
        bottom: '10'
    },
    textTiliue: {
        fontSize: 32,
        paddingTop: 10,
        color: "#0b8fac",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: 38,
        marginBottom: 35
    },
    Textinput: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: "#0b8fac",
        borderWidth: 1,
        margin: 15,
        padding: 13,
        left: '5%',
        height: 50,
        width: 339,
    },
    button: {
        backgroundColor: '#0b8fac',
        paddingVertical: 10,
        borderRadius: 54,
        margin: 12,
        width: 300,
        height: 50,
        left: '10%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
})

export default DataDeNasci;