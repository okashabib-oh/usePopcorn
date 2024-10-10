import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Watched from './Watched'
import SingleMovie from './SingleMovie'
import History from './History'

function MoviesWatched({ idPass, setIdPass }) {

    const [moviesCount, setMoviesCount] = useState(0)
    const [watchedMovies, setWatchedMovies] = useState([])
    const [isWatched, setIsWatched] = useState(false)
    const [ratingsCount, setRatingsCount] = useState(0)
    const [runtime, setRunTime] = useState(0)

    useEffect(() => {
        const watched = JSON.parse(localStorage.getItem('watched')) || []
        setMoviesCount(watched.length)

        const totalRating = watched.reduce((acc, movies) => {
            const rating = parseFloat(movies.imdbRating)
            return movies.imdbRating !== "N/A" && !isNaN(rating) ? acc + rating : acc
        }, 0)
        setRatingsCount(totalRating)

        const totalRuntime = watched.reduce((acc, movies) => {
            const rep = movies.runtime
            const result = rep.replace(" min", "")
            return result !== "N/A" && !isNaN(result) ? acc + parseInt(result) : acc
        }, 0)
        setRunTime(totalRuntime)

    }, [watchedMovies])

    return (
        <Container>
            <Watched moviesCount={moviesCount} ratingsCount={ratingsCount} runtime={runtime} />
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