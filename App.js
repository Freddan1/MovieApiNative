import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';
import Settings from './components/Settings';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}


