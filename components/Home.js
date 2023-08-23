import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import MovieApi from './MovieApi';
import Settings from './Settings';

function Home({navigation}) {
  return (
    <View>
      {/* <Button
        title='Go to contact'
        onPress={() => navigation.navigate("Contact")}
      /> */}
        <View style={styles.container}>
         <MovieApi navigation={navigation}/>
         <Settings navigation={navigation}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home