import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

function History({ watchedMovies, setWatchedMovies, isWatched }) {

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("watched")) || [];
        setWatchedMovies(history)
    }, [isWatched])

    const deleteWatched = (index) => {
        watchedMovies.splice(index, 1)
        localStorage.setItem("watched", JSON.stringify(watchedMovies))
        setWatchedMovies([...watchedMovies])
    }

    return (
        <Container>
            {watchedMovies?.map((movies, index) => (
                <div key={index}>
                    <Fade top>
                        <Wrapper>
                            <Poster>
                                <img src={movies.poster} alt="Poster" />
                            </Poster>
                            <Info>
                                <h2>{movies.title}</h2>
                                <Ratings>
                                    <span>⭐️ {movies.imdbRating}</span>
                                    <span>🌟 10</span>
                                    <span>⏳ {movies.runtime}</span>
                                    <button title='Delete' className='delete' onClick={() => deleteWatched(index)}>x</button>
                                </Ratings>
                            </Info>
                        </Wrapper>
                    </Fade>
                    <Fade left>
                        <Divider />
                    </Fade>
                </div>
            ))}
        </Container>
    );
}

export default History;

const Container = styled.div`
    width: 90%;
    overflow-y: auto;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 15px;
    background-color: #343A40;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 250ms;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 10px;
        gap: 10px;
    }
`;

const Poster = styled.div`
    img {
        width: 50px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;

        @media (max-width: 768px) {
            width: 50px;
            height: 50px;
        }
    }
`;

const Info = styled.div`
    flex: 1;
    line-height: 1.7rem;

    h2 {
        margin: 0;
        font-size: 18px;
        color: #fefefe;

        @media (max-width: 768px) {
            font-size: 16px;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Ratings = styled.div`
    display: flex;
    gap: 10px;
    font-size: 14px;
    justify-content: flex-start;

    span {
        display: flex;
        align-items: center;
    }

    .delete {
        border-radius: 50%;
        border: none;
        background-color: #E03131;
        cursor: pointer;
        transition: all 250ms;
        color: wheat;
        aspect-ratio: 1;
        font-weight: bold;
        width: 20px;
        height: 20px;

        &:hover {
            background-color: #ff1616;
        }

        @media (max-width: 768px) {
            width: 25px;
            height: 25px;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #e0e0e0;
    margin: 10px 0;
`;