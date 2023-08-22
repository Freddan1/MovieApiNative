import 'react-native-gesture-handler'; 
import { StyleSheet, Text, View } from 'react-native';
import { HeaderBar } from './components/HeaderBar';
import MovieApi from './components/MovieApi';
import StackNavigator from './components/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>

    </NavigationContainer>
  );
}


