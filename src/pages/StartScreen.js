import React from 'react';
import styled from 'styled-components';

import genreArray from '../data/genreArray';
import countryArray from '../data/countryArray';
import { CardList } from '../components/CardList';

const Start = styled.section``;

export const StartScreen = () => {
  const onMoreContent = () => {};

  return (
    <Start>
      <CardList
        title="genres"
        btnText="More"
        handleClick={onMoreContent}
        array={genreArray} />
      <CardList
        title="countries"
        btnText="More"
        handleClick={onMoreContent}
        array={countryArray} />
    </Start>
  );
};
