import React from 'react'
import styled from 'styled-components'

function Watched({ moviesCount, ratingsCount, runtime }) {

    return (
        <Container>
            <h4>Movies You Watched</h4>
            <WatchInfo>
                <div>
                    <span>#️⃣</span>
                    {moviesCount} Movies
                </div>
                <div>
                    <span>⭐️</span>
                    {ratingsCount.toFixed(1) || 0.00}
                </div>
                <div>
                    <span>🌟</span>
                    0.00
                </div>
                <div>
                    <span>⏳</span>
                    {runtime} min
                </div>
            </WatchInfo>
        </Container>
    )
}

export default Watched

const Container = styled.div`
    border-radius: 0 0 16px 16px;
    background-color: #343A40;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;

    h4 {
        margin-top: 5px;
        text-decoration: underline;
        text-decoration-color: slateblue;
        text-decoration-thickness: calc(20%);
        font-size: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
    }
`;

const WatchInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1px;

    div {
        font-size: 1rem;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }

        span {
            margin-right: 8px;
            font-size: 1.2rem;

            @media (max-width: 768px) {
                font-size: 1rem;
            }

            @media (max-width: 480px) {
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
    }
`;
