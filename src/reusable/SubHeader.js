import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  flex: 1 1 auto;
  background: black;
  padding: 50px;
  color: white;
  font-weight: 600;
`;

const Title = styled.h1`
  margin: 0;
`;

export const SubHeader = ({ title }) => {
  return (
    <Header>
      <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
    </Header>
  );
};
