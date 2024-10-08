import React from 'react'
import styled from 'styled-components'

function MovieDescription({ plot, actors, director, loading }) {
    return (
        <Container>
            {loading ? (
                <img src='/loading.gif' />
            ) : (
                <>
                    <p>Plot: {plot}</p>
                    <p>Actors: {actors}</p>
                    <p>Directed by {director}</p>
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