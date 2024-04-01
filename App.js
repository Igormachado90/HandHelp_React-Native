import React from 'react';
import Main from './src/componentes/Main';
import Login from './src/componentes/Login';
import Nome from './src/componentes/Nome';
import Email from './src/componentes/Email';
import Senha from './src/componentes/Senha';
import Sexo from './src/componentes/Sexo';
import Sangue from './src/componentes/Sangue';
import Idade from './src/componentes/Idade';
import Alergia from './src/componentes/Alergia';
import AlturaEpeso from './src/componentes/AlturaEpeso';
import CondicaoMed from './src/componentes/CondicaoMed';
import DataDeNasci from './src/componentes/DataDeNasci';
import Diabete from './src/componentes/Diabete';
import Fumante from './src/componentes/Fumante';
import NotaMedica from './src/componentes/NotaMedica';
import Pressao from './src/componentes/Pressao';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Main' component={Main} />
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;