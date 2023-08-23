import React from 'react'
import { SafeAreaView, TextInput, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons';


function SearchBar({ search, handleSearch }) {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15,}}>
        <View>
            <TextInput
                placeholder='Sök' 
                style={styles.SearchBar}
                value = {search}
                onChangeText={(text) => (handleSearch(text))} 
                selectionColor={'orange'}
                />
        </View>
          <Feather name="search" size={20} color="grey" style={styles.searchIcon}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
      marginTop: 10,
      paddingHorizontal: 40,
      paddingVertical: 10,
      height: 40,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },

    searchIcon: {
        marginRight: 10,
        marginTop: 20,
        height: 20,
        width: 20,
        flexDirection: "row-reverse",

    },
});

export default SearchBar