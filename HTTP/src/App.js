import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovieHandler = useCallback(() =>{
    setIsLoading(true);
    fetch('https://swapi.dev/api/films/').then(response => {
      if(!response.ok){
        throw new Error('Something went wrong!!!');
      }
      return response.json();
    }).then(data => {
      const transormedData = data.results.map(film =>{
        return {
          id : film['episode_id'],
          title : film.title,
          release : film['release_date'],
          openingText : film['opening_crawl']
        }
      });
      setMovies(transormedData);
      setIsLoading(false);
    }).catch(error =>{
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  useEffect(()=>{
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {error && <p>{error}</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <h1 style={{color:'black', margin:'auto'}}>Loading...</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
