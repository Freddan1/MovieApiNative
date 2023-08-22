import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Movie({route}) {

  const[movie, setMovie] = useState([])

  const {searchID} = route.params
  
  const fetchMovie = async () => {
    try {
      const response = await fetch (`http://www.omdbapi.com/?apikey=57a921d4&i=${searchID}`);
      const data = await response.json();

      if (data){
        setMovie(data)
        console.log(movie)
      }

    } catch(error){
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchMovie();
  },[])

  return (
    <View style = {styles.container}>
      <Image source = {{uri: movie.Poster}} style={styles.poster}/>
      <Text>{movie.Plot}</Text>
      <Text>Title:  {movie.Title}</Text>
      <Text>Year: {movie.Year}</Text>
      <Text>Type: {movie.Type}</Text>
      <Text>{movie.Rundtime}</Text>
      <Text>Writer: {movie.Writer}</Text>
      <Text>Imdb rating: {movie.imdbRating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 10,
  },

  poster: {
    width: 200,
    height: 200,
  }
})

export default Movie