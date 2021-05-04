import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Start = styled.section`
`

const Grid = styled.div`

`
const Container = styled.div``

const Title = styled.h1``

export const StartScreen = () => {
  const genreArr = ['romantic', 'drama', 'kids', 'action', 'horror', 'comedy']
  return (
    <Start>
      <Grid>
        {genreArr.map((gen) => (
          <Link to={`/genres/${gen}`}>
            <Container genre={gen}>
              <Title>{gen}</Title>
            </Container>
          </Link>))}
      </Grid>
    </Start>
  )
}