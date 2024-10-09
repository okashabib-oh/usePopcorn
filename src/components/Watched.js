import React from 'react'
import styled from 'styled-components'

function Watched() {
    return (
        <Container>
            <h4>Movies You Watched</h4>
            <WatchInfo>
                <div>
                    <span>#️⃣</span>
                    0 Movies
                </div>
                <div>
                    <span>⭐️</span>
                    0.00
                </div>
                <div>
                    <span>🌟</span>
                    0.00
                </div>
                <div>
                    <span>⏳</span>
                    0 min
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
    overflow-x: auto;

    h4 {
        text-decoration: underline;
    }
`

const WatchInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    div span {
        margin: 8px;
    }
`