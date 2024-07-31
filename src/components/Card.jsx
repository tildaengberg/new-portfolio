import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { GAP } from '../config/gap'
import { Link } from 'react-router-dom'
import { COLORS } from '../config/colors'

const Card = ({ image, headline, children, onClick, path }) => {
  return (
    <Wrapper onClick={onClick} to={path}>
      <Image src={image} />
      <Text textStyle='h4'>{headline}</Text>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled(Link)`
  display: grid;
  gap: ${GAP.xxs};
  text-decoration: none;
  color: ${COLORS.grey};
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

const Image = styled.img`
  max-width: 225px;
  background-color: grey;
  @media (max-width: 991px) {
    max-width: 40vw;
  }
`
