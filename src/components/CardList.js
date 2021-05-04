import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Card } from './Card';
import netflix, { generateGenre } from '../reducers/netflix';

const Genre = styled.div``;
const Title = styled.h1``;

export const CardList = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.netflix.items);

  useEffect(() => {
    dispatch(netflix.actions.setGenre(genre));
    dispatch(generateGenre());
  }, [dispatch, genre]);

  return (
    <Genre genre={genre}>
      <Title genre={genre} />
      {items.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </Genre>
  );
};
