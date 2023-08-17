import 'react-native-gesture-handler'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './components/Movie';
import { HeaderBar } from './components/HeaderBar';
import MovieList from './components/MovieList';
import MovieApi from './components/MovieApi';
import SearchBar from './components/SearchBar';


export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <MovieApi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
