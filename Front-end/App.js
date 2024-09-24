import React from 'react';
import Main from './src/components/Main/main';
import Login from './src/components/Login';
import Nome from './src/components/Nome';
import Email from './src/components/Email';
import Senha from './src/components/Senha';
import Sexo from './src/components/Sexo';
import Sangue from './src/components/Sangue';
import Idade from './src/components/Idade';
import Alergia from './src/components/Alergia';
import AlturaEpeso from './src/components/AlturaEpeso';
import CondicaoMed from './src/components/CondicaoMed';
import DataDeNasci from './src/components/DataDeNasci';
import Diabete from './src/components/Diabete';
import Fumante from './src/components/Fumante';
import NotaMedica from './src/components/NotaMedica';
import Pressao from './src/components/Pressao';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import PainelScreen from './src/screens/PainelScreen';
import RotinaScreen from './src/screens/Rotina/Rotina';
import RotinaFim from './src/screens/Rotina/RotinaFim';
import LocalDorScreen  from './src/screens/Triagem/LocalDorScreen';
import IntensidadeScreen from './src/screens/Triagem/IntensidadeScreen';
import ComVozScreen from './src/screens/Triagem/ComVozScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Main'}>
        <Stack.Screen name='Main' component={Main} />
        {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
        <Stack.Screen name='Registro' component={RegisterScreen} />
        <Stack.Screen name="Painel" component={PainelScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Nome' component={Nome} />
        <Stack.Screen name='Email' component={Email} />
        <Stack.Screen name="Senha" component={Senha} />
        <Stack.Screen name="Sexo" component={Sexo} />
        <Stack.Screen name="Sangue" component={Sangue} />
        <Stack.Screen name="Alergia" component={Alergia} />
        <Stack.Screen name="Idade" component={Idade} />
        <Stack.Screen name="AlturaEpeso" component={AlturaEpeso} />
        <Stack.Screen name="CondicaoMed" component={CondicaoMed} />
        <Stack.Screen name="DataDeNasci" component={DataDeNasci} />
        <Stack.Screen name="Diabete" component={Diabete} />
        <Stack.Screen name="Fumante" component={Fumante} />
        <Stack.Screen name="NotaMedica" component={NotaMedica} />
        <Stack.Screen name="Pressao" component={Pressao} />
        <Stack.Screen name="Rotina" component={RotinaScreen} />
        <Stack.Screen name="RotinaFim" component={RotinaFim} />
        <Stack.Screen name="LocalDor" component={LocalDorScreen} />
        <Stack.Screen name="Intensidade" component={IntensidadeScreen} />
        <Stack.Screen name="Voz" component={ComVozScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;