import React from 'react'
import '../config/fonts/Powerr/PowerrBold-Rpz8M.ttf'
import '../config/fonts/Powerr/PowerrMedium-rgVwO.ttf'
import '../config/fonts/Poppins/Poppins-Regular.ttf'
import { COLORS } from '../config/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FONT_SETTINGS = {
  h1: {
    fontFamily: 'PowerrBold',
    fontSize: {
      large: '2.625rem',
      small: '1.5rem',
    },
  },
  h2: {
    fontFamily: 'PowerrBold',
    fontSize: {
      large: '1.875rem',
      small: '1.5rem',
    },
  },
  h3: {
    fontFamily: 'PowerrMedium',
    fontSize: {
      large: '1.5rem',
      small: '1.125rem',
    },
  },
  h4: {
    fontFamily: 'PowerrBold',
    fontSize: {
      large: '1.125rem',
      small: '1rem',
    },
  },
  p: {
    fontFamily: 'Poppins-Regular',
    fontSize: {
      large: '1.125rem',
      small: '0.875rem',
    },
    color: COLORS.grey,
  },
  button: {
    fontFamily: 'Poppins-Regular',
    fontSize: {
      large: '1rem',
      small: '0.875rem',
    },
    color: COLORS.grey,
  },
  navbar: {
    fontFamily: 'PowerrMedium',
    fontSize: {
      large: '1.25rem',
      small: '1.25rem',
    },
  },
}

const Text = ({ textStyle = 'p', children, link = '' }) => {
  const fontSettings = FONT_SETTINGS[textStyle]

  const Container = styled.div`
    font-family: ${fontSettings.fontFamily};
    font-size: ${fontSettings.fontSize.large};
    color: ${fontSettings.color};

    @media (max-width: 991px) {
      font-size: ${fontSettings.fontSize.small};
    }
  `

  return (
    <>
      {link !== '' ? (
        <StyledLink to={link}>
          <Text textStyle='navbar'>{children}</Text>
        </StyledLink>
      ) : (
        <Container>{children}</Container>
      )}
    </>
  )
}

export default Text

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.grey};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${COLORS.black};
    cursor: pointer;
  }
`
