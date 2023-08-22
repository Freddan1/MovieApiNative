import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
}