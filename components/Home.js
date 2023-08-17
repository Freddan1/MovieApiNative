import React from 'react'
import { Text, Button, View } from 'react-native'

function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to contact'
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  )
}

export default Home