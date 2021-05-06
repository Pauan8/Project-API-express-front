import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { generateList } from 'reducers/netflix';
import genreArray from '../data/genreArray';
import countryArray from '../data/countryArray';
import { CardGrid } from '../reusable/CardGrid';
import { SubHeader } from '../reusable/SubHeader'

const Section = styled.section``;

export const SingleCategoryScreen = (name) => {

  const onMoreContent = () => {};
  return (
    <Section>
      <SubHeader title={name} btnText="More" handleClick={onMoreContent} />
      <CardGrid path={name} />
    </Section>
  )
}