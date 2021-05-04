import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`;

const Title = styled.h2``;

const GenreLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
`;
export const CardGrid = ({ array, path }) => {
  return (
    <Grid>
      {array.map((item, i) => (
        <GenreLink key={i} to={`/${path}/${item.name}`}>
          <Container color={item.color}>
            <Title>{item.display}</Title>
          </Container>
        </GenreLink>
      ))}
    </Grid>
  );
};
