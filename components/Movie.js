import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Movie({route}) {

  const[movie, setMovie] = useState([])

  const {searchID} = route.params
  console.log(searchID)
  
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
    <View style>
      <Image source = {{uri: movie.Poster}} style={styles.poster}/>
      <Text>{movie.Title}</Text>
      <Text>{movie.Year}</Text>
      <Text>{movie.Type}</Text>
      <Text>{movie.Rundtime}</Text>
      <Text>{movie.Writer}</Text>
      <Text>{movie.imdbRating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  poster: {
    width: 200,
    height: 200,
  }
})

export default Movie