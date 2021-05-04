import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import netflix, { generateList } from '../reducers/netflix';
import { Card } from '../components/Card';
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

export const CategoryScreen = ({ name }) => {
  const { genre, country } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.netflix.items);

  useEffect(() => {
    if (name === 'genre') {
      dispatch(netflix.actions.setGenre(genre));
      dispatch(generateList('genre'));
    } else {
      dispatch(netflix.actions.setCountry(country));
      dispatch(generateList('country'));
    }
  }, [country, dispatch, genre, name]);

  return (
    <List>
      <SubHeader title={name} />
      <Grid>
        {items.map((item, i) => (
          <Card
            {...item}
            key={i}
            name={name === 'genre' ? genre : country}
            array={name === 'genre' ? genreArray : countryArray} />
        ))}
      </Grid>
    </List>
  );
};
