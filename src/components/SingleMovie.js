import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieDetail from './MovieDetail';
import StarRatings from './StarRatings';
import MovieDescription from './MovieDescription';

function SingleMovie({ idPass, setIdPass }) {
    const [singleMovie, setSingleMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchSingleMovie() {
            setLoading(true);
            const response = await fetch(`https://www.omdbapi.com/?i=${idPass}&apikey=13216812`);
            const data = await response.json();
            setSingleMovie(data);
            setLoading(false);
            console.log(data);
        }
        fetchSingleMovie();
    }, [idPass]);

    if (singleMovie.Response === 'False' || singleMovie.length === 0) {
        return null;
    }

    return (
        <Container>
            <MovieContainer>
                {loading ? (
                    <img src='/loading.gif' />
                ) : (
                    <>
                        <BackButton onClick={() => (setSingleMovie([]), setIdPass(""))}>←</BackButton>

                        <MoviePoster>
                            <img
                                src={singleMovie.Poster === 'N/A' ? '/download.jpeg' : singleMovie.Poster}
                                alt={singleMovie.Title}
                            />
                        </MoviePoster>

                        <MovieDetail title={singleMovie.Title}
                            released={singleMovie.Released}
                            runtime={singleMovie.Runtime}
                            genre={singleMovie.Genre}
                            imdbRating={singleMovie.imdbRating}
                        />
                    </>
                )}
            </MovieContainer>
            {/* <StarRatings /> */}

            <MovieDescription plot={singleMovie.Plot} actors={singleMovie.Actors} director={singleMovie.Director} loading={loading} />
        </Container>
    );
}

export default SingleMovie;

const Container = styled.div`
    position: relative;
`

const MovieContainer = styled.div`
  display: flex;
  background-color: #343a40;
  color: #f9f9f9;
  border-radius: 12px;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;

  img {
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
`;

const MoviePoster = styled.div`
    padding-right: 20px;

    img {
        width: 120px;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px;
    font-size: 12px;
    background-color: #f9f9f9;
    color: #000;
    border: none;
    border-radius: 40%;
    cursor: pointer;
    z-index: 10;
    transition: all 250ms;

    &:hover {
        background-color: #495057;
        color: wheat;
    }
`;