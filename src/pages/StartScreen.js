import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Start = styled.section`
`

const Grid = styled.div`
width: 100%;
display: grid;
grid-template-rows: repeat(10, 200px);
grid-template-columns: 1fr;


@media (min-width: 768px) {
grid-template-rows: repeat(6, 200px);
grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
grid-template-rows: repeat(4, 200px);
grid-template-columns: repeat(4, 1fr);
}

`
const Container = styled.div`
display: flex;
height: 100%;
justify-content:center;
align-items: center;`

const Title = styled.h1`
`

export const StartScreen = () => {
  const genreArr = ['romantic', 'drama', 'kids', 'action', 'horror', 'comedy']
  return (
    <Start>
      <Grid>
        {genreArr.map((gen, i) => (
          <Link key={i} to={`/genres/${gen}`}>
            <Container genre={gen}>
              <Title>{gen}</Title>
            </Container>
          </Link>))}
      </Grid>
    </Start>
  )
}