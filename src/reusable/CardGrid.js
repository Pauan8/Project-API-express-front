import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux'
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
  background: black;
`;

const Title = styled.h2`
color: white;`;

const GenreLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
`;
export const CardGrid = ({ path }) => {
    const items = useSelector((store) => store.netflix.items);
  return (
    <Grid>
        {items.map(item => 
          <Container>
            <Title>{item.title}</Title>
          </Container> )}
    </Grid>
  );
};
