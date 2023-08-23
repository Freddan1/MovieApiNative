// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Contact from './Contact';
import Movie from './Movie';
import { StyleSheet } from 'react-native';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: "black"
          }
        }} />
        <Stack.Screen name="Details" component={Movie} />
        <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>

  );
}


export default StackNavigator;