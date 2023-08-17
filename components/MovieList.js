
import React from 'react'
import { View, Image, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'

function MovieList({ movies }) {
    const renderMovies = ({ item }) => (
        <View style={styles.item} key={item.imdbID}>
            <Image source = {{ uri: item.Poster}} style= {styles.poster}/>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.year}>Year: {item.Year}</Text>
            <Text style={styles.type}>Category: {item.Type}</Text>
        </View>
    )    
  return (
    <SafeAreaView style={styles.container}>
        <View >
            <FlatList
                data={movies}
                renderItem={renderMovies}
                keyExtractor={item => item.imdbID}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "lightgrey",
        padding: 20,
        marginTop:20,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 32,
    },
    poster: {
        borderRadius: 10,
        height: 200,
        width: 200,
    }
});

export default MovieList