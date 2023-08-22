
import React from 'react'
import { View, Image, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { TouchableOpacity  } from 'react-native';

function MovieList({ movies, navigation }) {
    const renderMovies = ({ item }) => (
        <View style={styles.item} key={item.imdbID}>
            <View style={styles.container}>
                <Image source = {{ uri: item.Poster}} style= {styles.poster}/>
                <TouchableOpacity onPress={() => navigation.navigate("Details", { searchID: item.imdbID })}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text style={styles.year}>Year: {item.Year}</Text>
                    <Text style={styles.type}>Category: {item.Type}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )    
  return (
    <SafeAreaView style={styles.container2}>
        <View>
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
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "#fff",
    },

    container2: {
        backgroundColor: 'black',
        marginTop: 70,
    },
    
    item: {
        backgroundColor: "#fff",
        padding: 5,
        marginTop:10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        padding: 2,
        fontSize: 20,
        fontWeight: '500'
    },
    poster: {
        borderRadius: 10,
        height: 100,
        width: 100,
    },
});

export default MovieList