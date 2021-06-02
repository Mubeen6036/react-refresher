import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () =>{
    fetch('https://swapi.dev/api/films/').then(response => {
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
    }).catch(error =>{
      console.log(error);
    });
  }

  fetchMovieHandler();

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
