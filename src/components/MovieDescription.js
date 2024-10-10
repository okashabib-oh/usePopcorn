import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

function MovieDescription({ plot, actors, director, title, imdbRating, runtime, poster, id, loading, isWatched, setIsWatched }) {

    const handleAdd = () => {
        const watched = JSON.parse(localStorage.getItem('watched')) || [];
        watched.push({ id, title, imdbRating, runtime, poster });
        localStorage.setItem('watched', JSON.stringify(watched));
        setIsWatched(true);
    }

    useEffect(() => {
        const isWatched = JSON.parse(localStorage.getItem('watched')) || [];
        const idExist = isWatched.some(movie => movie.id === id);
        setIsWatched(idExist);
    }, [id])

    return (
        <Container>
            {loading ? (
                <img src='/loading.gif' />
            ) : (
                <>
                    <Fade top>
                        <p>Plot: {plot}</p>
                    </Fade>
                    <Fade left>
                        <p>Actors: {actors}</p>
                    </Fade>
                    <Fade bottom>
                        <p>Directed by {director}</p>
                    </Fade>
                    <Fade right>
                        {isWatched ? (
                            <p style={{
                                padding: '10px 36px',
                                backgroundColor: 'green',
                                borderRadius: '12px'
                            }}>You've watched the movie</p>
                        ) : (
                            <button onClick={handleAdd} className='addToList'>+ Add to list</button>

                        )}
                    </Fade>
                </>
            )}
        </Container>
    )
}

export default MovieDescription

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #b8b8b8;
    font-size: .8em;
    padding: 14px;

    img {
        width: 50%;
        height: 50%;
        object-fit: cover;
    }

    .addToList{
        padding: 8px 32px;
        border: none;
        background-color: #6741D9;
        color: #fff;
        border-radius: 16px;
        margin-top: 20px;
        transition: all 250ms;
        cursor: pointer;

        &:hover {
            background-color: slateblue;
            box-shadow: #0000003d 0 3px 8px;
            padding: 7px 30px;
        }
    }
`