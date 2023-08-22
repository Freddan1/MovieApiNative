
import React from 'react'
import { View, Image, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import Movie from './Movie';
import { TouchableOpacity  } from 'react-native';

function MovieList({ movies, navigation }) {
    const renderMovies = ({ item }) => (
        <View style={styles.item} key={item.imdbID}>
            <Image source = {{ uri: item.Poster}} style= {styles.poster}/>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.year}>Year: {item.Year}</Text>
            <Text style={styles.type}>Category: {item.Type}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Details", { searchID: item.imdbID })}>
                <Text>Read more</Text>
            </TouchableOpacity>
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
        backgroundColor: "red",
        marginTop: 70,
    },
    item: {
        backgroundColor: "lightgrey",
        padding: 20,
        marginTop:10,
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