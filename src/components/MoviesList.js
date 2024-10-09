import React from 'react'
import { Fade } from 'react-reveal';
import styled from 'styled-components'

function MoviesList({ movies, setIdPass, setMovies, setSearch }) {

    return (
        <Container>
            <List>
                {movies !== undefined ?
                    movies?.map((movie) => (
                        <ListItem key={movie.imdbID} onClick={() => setIdPass(movie.imdbID)}>
                            <Fade left>
                                <Image>
                                    <img src={movie.Poster === "N/A" ? "/download.jpeg" : movie.Poster} alt={movie.Title} />
                                </Image>
                            </Fade>
                            <Fade top>
                                <MovieInfo>
                                    <h4>{movie.Title}</h4>
                                    <p>🗓 {movie.Year}</p>
                                </MovieInfo>
                            </Fade>
                        </ListItem>
                    )) : (
                        <p className='notFound'>Movies Not Found</p>
                    )}
            </List>
            {movies?.length > 0 ? (
                <ButtonRemove>
                    <button onClick={() => (setMovies([]), setSearch(""))}>-</button>
                </ButtonRemove>
            ) : (
                <p></p>
            )}
        </Container>
    )
}

export default MoviesList

const Container = styled.div`
    background-color: #2B3035;
    border-radius: 8px;
    width: 20rem;  
    max-height: 80vh;
    overflow-y: auto;  
    padding: 10px;
    position: relative;
    height: 100vh;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    transition: background-color 250ms;
    cursor: pointer;

    &:hover {
        background-color: #343a40;
        border-radius: 8px;
    }

    hr {
        width: 100%;
        border: none;
        border-bottom: 1px solid #555;
    }
`;

const Image = styled.div`
    flex: 0 0 50px; 
    padding-right: 10px;

    img {
        width: 50px;
        height: 75px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const MovieInfo = styled.div`
    color: #f9f9f9;
    flex-grow: 1;

    h4 {
        font-size: 16px;
        margin: 0 0 5px 0;
    }

    p {
        margin: 0;
        font-size: 14px;
        color: #999;
    }
`;

const ButtonRemove = styled.div`
    position: absolute;
    top: 0;
    right: -0;
    margin: 8px 10px;
    
    button {
        background: #1B2021;
        border: none;
        border-radius: 40%;
        color: #f9f9f9;
        cursor: pointer;
        padding: 0px 5px ;
        transition: all 250ms;
    }

    button:hover{
        background: #000000;
    }
`