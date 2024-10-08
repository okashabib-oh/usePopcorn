import React, { useState } from 'react'
import styled from 'styled-components'

function StarRatings() {

    const [hoveredStars, setHoveredStars] = useState(0); // Track the hovered stars count
    const [selectedStars, setSelectedStars] = useState(0); // Track the selected stars after click

    return (
        <Container>
            {Array.from({ length: 10 }, (_, index) => (
                <img
                    key={index}
                    src={selectedStars >= index + 1 || hoveredStars >= index + 1 ? "star (1).png" : "/star.png"}
                    onMouseOver={() => setHoveredStars(index + 1)}
                    onMouseLeave={() => setHoveredStars(0)}
                    onClick={() => setSelectedStars(index + 1)} // Lock stars on click
                    alt={`star-${index}`}
                    style={{ width: '30px', cursor: 'pointer' }}
                />
            ))}
            <p>{selectedStars || hoveredStars}</p>
        </Container>
    );
}

export default StarRatings

const Container = styled.div`
    background-color: #343a40;
    border-radius: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }

    p {
        margin-left: 8px;
    }
`