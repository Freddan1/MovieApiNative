import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import MovieApi from './MovieApi';

function Home({navigation}) {
  return (
    <View>
      <Text></Text>
      <Button
        title='Go to contact'
        onPress={() => navigation.navigate("Contact")}
      />
        <View style={styles.container}>
         <MovieApi/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home