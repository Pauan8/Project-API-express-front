import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';

const Start = styled.section``;

const Container = styled.div``

const Title = styled.h1`
color: white;`

export const StartScreen = () => {
  return (
    <Start>
      <Link to="/type/tvshows">
        <Container>
          <Title>TV SERIES</Title>
        </Container>
      </Link>
      <Link to="/type/movies">
        <Container>
          <Title>MOVIES</Title>
        </Container>
      </Link>
    </Start>
  );
};
