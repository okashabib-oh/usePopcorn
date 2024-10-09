import React from 'react'
import styled from 'styled-components'

function NavBar({ search, setSearch, movies }) {
    return (
        <Container>
            <a href='/'>
                <Logo>
                    <span style={{ fontSize: '30px' }}>🍿</span>
                    <h1>usePopcorn</h1>
                </Logo>
            </a>

            <SearchBox>
                <input type="search" placeholder='Search movies..'
                    onInput={(e) => setSearch(e.target.value)}
                />
            </SearchBox>

            <Results>
                <p>Found {movies?.length || 0} results</p>
            </Results>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f9f9f9;
    background-color: #6741D9;
    border-radius: 12px;
    margin: 20px;
    padding: 0 32px;

    a{
        text-decoration: none;
        color: #f9f9f9;
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
`
const SearchBox = styled.div`

    input{
        background-color: #7950f2;
        border: none;
        border-radius: 5px;
        padding: 11px 16px;
        transition: all 250ms;
        color: #fff;
    }

    input::placeholder{
        color: #f9f9f9;
    }

    input:hover{
        box-shadow: #0000003d 0 3px 8px;
    }

    input:focus{
        outline: none;
        box-shadow: #0000003d 0 3px 8px;
    }
`
const Results = styled.div`
    color: #dee2e6;
`