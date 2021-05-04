import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const ImageContainer = styled.div`
height: 200px;
width: 200px;
`

const Image = styled.img`
width: 100%;
height: 200px;
`
const TextContainer = styled.div`
`
const Title = styled.h1``

const Description = styled.p``

export const Card = ({ id, title}) => {
  
  return (
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <TextContainer>
        <Title> {title} </Title>
        <Description> {id} </Description>
      </TextContainer>
    </Wrapper>)
}