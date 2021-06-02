import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchMovieDataHandler = useCallback(async () => {
    setIsLoding(true);
    setError(null);
    try{
      const Response = await fetch('https://react-http-10733-default-rtdb.firebaseio.com/movies.json');  //simple method of fetching data
      if(!Response.ok){
        throw new Error("Something Went Wrong!");
      }
      const data = await Response.json();

      const loadedMovies= []

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      /*const transformedData = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      })*/

      setMovies(loadedMovies);
    }catch(error){
      setError(error.message);
    }
    setIsLoding(false);
  

    /*fetch('https://swapi.dev/api/films/')          // comparitively hard method to fetch data
      .then(Response => {
        return Response.json();
    })
    .then((data) => {

      const transformedData = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });

      setMovies(transformedData);
    })*/
  }, []);

  useEffect(() => {
    fetchMovieDataHandler();
  }, [fetchMovieDataHandler]);

  async function addMovieHandler(movie){
    const Response = await fetch('https://react-http-10733-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'Application/json'
      }
    });

    const data = await Response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieDataHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && !error && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && <p>No Movie Found</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
