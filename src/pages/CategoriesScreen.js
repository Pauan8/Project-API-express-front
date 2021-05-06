import React from 'react';
import { useParams, Link } from 'react-router-dom';

import styled from 'styled-components/macro';

import { SubHeader } from '../reusable/SubHeader';
import genreArray from '../data/genreArray.json';
import countryArray from '../data/countryArray.json';

const List = styled.section``;

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
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1, 1 auto;
  background: ${(props) => props.color};
`;

const Title = styled.h1`
  color: white;
`;

export const CategoriesScreen = () => {
  const { type } = useParams();

  console.log(type)

  const handleCategories = (name, array) => {
    return (
      <>
        <SubHeader title={name} />
        <Grid>
          {array.map((item) => (
            <Link to={`/type/${type}/${name}/`}>
              <Container color={item.color}>
                <Title>{item.name}</Title>
              </Container>
            </Link>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <List>
      {handleCategories('genre', genreArray)}
      {handleCategories('country', countryArray)}
    </List>
  );
};
