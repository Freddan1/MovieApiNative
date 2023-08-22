import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import MovieApi from './MovieApi';

function Home({navigation}) {
  return (
    <View>
      {/* <Button
        title='Go to contact'
        onPress={() => navigation.navigate("Contact")}
      /> */}
        <View style={styles.container}>
         <MovieApi navigation={navigation}/>
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