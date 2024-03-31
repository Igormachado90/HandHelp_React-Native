import React from 'react';
import Main from './src/componentes/Main';
import Login from './src/componentes/Login';
import Nome from './src/componentes/Nome';
import Email from './src/componentes/Email';
import Senha from './src/componentes/Senha';
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;