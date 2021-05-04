import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div``
const Button = styled.button``
const ButtonText = styled.span``

export const PageButton = ({ content, handleClick }) => {
  return (
    <ButtonContainer onClick={handleClick}>
      <Button>
        <ButtonText>{content}</ButtonText>
      </Button>
    </ButtonContainer>
  )
}