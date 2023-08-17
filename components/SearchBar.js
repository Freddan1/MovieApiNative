import React from 'react'
import { SafeAreaView, TextInput, StyleSheet, View } from 'react-native'


function SearchBar({ search, setSearch }) {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 50,}}>
        <View>
            <TextInput
                placeholder='MEN SÖK DÅ!'
                style={styles.SearchBar}
                value = {search}
                onChangeText={(text) => setSearch(text)}
                />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    SearchBar: {
        marginTop: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});

export default SearchBar