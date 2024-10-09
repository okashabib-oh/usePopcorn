import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

function MovieDescription({ plot, actors, director, loading }) {
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
`