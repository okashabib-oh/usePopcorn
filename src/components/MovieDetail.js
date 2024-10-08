import React from 'react';
import styled from 'styled-components';

function MovieDetail({ title, released, runtime, genre, imdbRating }) {
    return (
        <DetailWrapper>
            <h2>{title}</h2>
            <p>{released} • {runtime}</p>
            <p>{genre}</p>
            <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
            </p>
        </DetailWrapper>
    );
}

export default MovieDetail;

const DetailWrapper = styled.div`
  text-align: left;

  h2 {
    margin: 0;
    font-size: 1.4em;
    color: #ffffff;
  }

  p {
    font-size: 1em;
    margin: 5px 0;
    color: #b8b8b8; /* General text color */
    line-height: 1.6; /* Adding line spacing */
  }

  p:last-child {
    color: #ffd700;
    font-size: 1em;
    margin-top: 10px;

    span {
      color: #ffd700; /* Star color */
    }
  }
`;
