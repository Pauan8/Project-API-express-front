import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  margin: 10px;
`;
const Container = styled.div`
  width: 60%;
  text-align: center;
`;
const Title = styled.h1``;

const Description = styled.p``;

export const Card = ({ id, title, name, array }) => {
  return (
    <Wrapper
      color={array[array.findIndex((i) => i.name === name)].color}>
      <Container>
        <Title> {title} </Title>
        <Description> {id} </Description>
      </Container>
    </Wrapper>
  );
};
