import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Watched from './Watched'
import SingleMovie from './SingleMovie'
import History from './History'

function MoviesWatched({ idPass, setIdPass }) {

    const [moviesCount, setMoviesCount] = useState(0)
    const [watchedMovies, setWatchedMovies] = useState([])
    const [isWatched, setIsWatched] = useState(false)

    useEffect(() => {
        const watched = JSON.parse(localStorage.getItem('watched')) || []
        setMoviesCount(watched.length)
    }, [moviesCount, watchedMovies])

    return (
        <Container>
            <Watched moviesCount={moviesCount} setMoviesCount={setMoviesCount} />
            <History watchedMovies={watchedMovies} setWatchedMovies={setWatchedMovies} isWatched={isWatched} />
            <SingleMovie idPass={idPass} setIdPass={setIdPass} isWatched={isWatched} setIsWatched={setIsWatched} />
        </Container>
    )
}

export default MoviesWatched

const Container = styled.div`
    background-color: #2B3035;
    width: 30rem;
    border-radius: 8px;
    max-height: 80vh;
    color: #f9f9f9;
    height: 100vh;
    overflow-y: auto;

`