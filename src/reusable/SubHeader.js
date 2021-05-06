import React from 'react';
import styled from 'styled-components/macro';

import { PageButton } from './PageButton'

const HeaderContainer = styled.div`
  flex: 1 1 auto;
  background: black;
  padding: 50px;
  color: white;
  font-weight: 600;
`;

const Title = styled.h1`
  margin: 0;
`;

export const SubHeader = ({ title, btnText, handleClick }) => {
    console.log(title)
  return (
    <HeaderContainer>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      <PageButton content={btnText} handleClick={handleClick} />
    </HeaderContainer>
  );
};
