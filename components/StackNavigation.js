// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Contact from './Contact';
import Movie from './Movie';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Movie} />
    </Stack.Navigator>

  );
}

export default StackNavigator;