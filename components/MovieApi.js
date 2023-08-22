import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'

export default function MovieApi({navigation}) {
    const [search, setSearch] = useState ("Batman")
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState ("");
    const [selectedType, setSelectedType] = useState("");

    
    const fetchMovies = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=57a921d4&s=${search}`);
            const movies = await response.json();
            if(movies.Response =="True"){
                setMovies(movies.Search);
                setErrorMessage("");
                console.log(movies.Search)


            } else{
                setMovies[""];
                setErrorMessage(movies.Error)
            }

        } catch (error){
            console.log(error)
            setMovies([])
            setErrorMessage("An error occurred while fetching movies.")
        }
    };

    useEffect (() =>{
        fetchMovies();
    },[search, selectedType]);

    function handleSearch(value) {
        setSearch(value);
    }

  return (
    <View>
        <SearchBar value = {search} handleSearch = {handleSearch}/>
        <MovieList movies={movies} navigation={navigation} />
    </View>
  )
}
