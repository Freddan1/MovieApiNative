import React from 'react'
import { SafeAreaView, TextInput, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons';


function SearchBar({ search, handleSearch }) {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 50,}}>
        <View>
            <TextInput
                placeholder='Sök'
                style={styles.SearchBar}
                value = {search}
                onChangeText={(text) => (handleSearch(text))} 
                />
        <Feather name="search" size={24} color="black" style={styles.searchIcon}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    SearchBar: {
      flexDirection: 'row',
      marginTop: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      height: 40,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },

    searchIcon: {
        marginRight: 10,
    },
});

export default SearchBar