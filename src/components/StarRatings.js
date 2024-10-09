import React, { useState } from 'react'
import { Fade } from 'react-reveal';
import styled from 'styled-components'

function StarRatings({ id, title, runtime, genre, imdbRating, poster }) {
    console.log(id);

    const [hoveredStars, setHoveredStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <>
            <Container>
                <StarsSection>
                    {Array.from({ length: 10 }, (_, index) => (
                        <Fade bottom>
                            <img
                                key={index}
                                src={selectedStars >= index + 1 || hoveredStars >= index + 1 ? "star (1).png" : "/star.png"}
                                onMouseOver={() => setHoveredStars(index + 1)}
                                onMouseLeave={() => setHoveredStars(0)}
                                onClick={() => setSelectedStars(index + 1)}
                                alt={`star-${index}`}
                                style={{ width: '30px', cursor: 'pointer' }}
                            />
                        </Fade>
                    ))}
                    <p>{selectedStars || hoveredStars}</p>
                </StarsSection>
                {selectedStars > 0 && (
                    <button className='addToList'>+ Add to list</button>
                )}
            </Container>
        </>
    );
}

export default StarRatings

const Container = styled.div`
    background-color: #343a40;
    border-radius: 12px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
        width: 30px;
        height: 30px;
    }

    p {
        margin-left: 8px;
    }

    .addToList{
        margin-top: 12px;
        padding: 6px 20px;
        background-color: #6741D9;
        color: #f9f9f9;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 250ms;
        margin-bottom: 12px;

        &:hover{
            background-color: #835aff;
        }
    }
`

const StarsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
