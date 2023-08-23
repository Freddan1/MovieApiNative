import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import { StyleSheet } from 'react-native';
import Settings from './Settings';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e7eaf6",
          width: 190,
          headerShown: false,
        },
      }}
    >
      <Drawer.Screen name="Popcorn time" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
