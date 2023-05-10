import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { GAP } from '../config/gap'

const ButtonGroup = ({ buttons, activeIndex, onButtonClick }) => {
  return (
    <Wrapper>
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={() => onButtonClick(index)}
          active={activeIndex === index}
        >
          {button}
        </Button>
      ))}
    </Wrapper>
  )
}

export default ButtonGroup

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  gap: ${GAP.xs};
  grid-auto-flow: column;
  @media (max-width: 991px) {
    gap: ${GAP.xxs};
  }
`
