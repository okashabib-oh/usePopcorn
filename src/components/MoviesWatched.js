import React from 'react'
import styled from 'styled-components'
import Watched from './Watched'
import SingleMovie from './SingleMovie'

function MoviesWatched({ idPass, setIdPass }) {
    return (
        <Container>
            <Watched />
            <SingleMovie idPass={idPass} setIdPass={setIdPass} />
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