import React from 'react';
import styled from 'styled-components';

import { SubHeader } from '../reusable/SubHeader';
import { CardGrid } from '../reusable/CardGrid';
import { PageButton } from '../reusable/PageButton'

const HeaderContainer = styled.div``

export const CardList = ({ title, array, btnText, handleClick }) => {
  return (
    <>
      <HeaderContainer>
        <SubHeader title={title} />
        <PageButton content={btnText} handleClick={handleClick} />
      </HeaderContainer>
      <CardGrid array={array} path={title} />
    </>
  );
};
