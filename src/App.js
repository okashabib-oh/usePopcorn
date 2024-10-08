import './App.css';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import { useEffect, useState } from 'react';
import MoviesWatched from './components/MoviesWatched';

function App() {

  const API_KEY = "13216812"

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [idPass, setIdPass] = useState("")

  const fetchMovies = async () => {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await response.json()
    setMovies(data.Search)
    console.log(data);
  }

  useEffect(() => {
    if (search.length > 2) {
      fetchMovies()
    }
  }, [search])


  return (
    <div>
      <NavBar search={search} setSearch={setSearch} movies={movies} />
      <div className='movies'>
        <MoviesList movies={movies} setIdPass={setIdPass} />
        <MoviesWatched idPass={idPass} setIdPass={setIdPass} />
      </div>
    </div>
  );
}

export default App;
