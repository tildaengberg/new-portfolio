import React from 'react'
import '../config/fonts/Powerr/PowerrBold-Rpz8M.ttf'
import '../config/fonts/Powerr/PowerrMedium-rgVwO.ttf'
import '../config/fonts/Poppins/Poppins-Regular.ttf'
import { COLORS } from '../config/colors'
import { FONT_SETTINGS } from '../config/fontSettings'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Text = ({ textStyle = 'p', children, link = '', target = '_self' }) => {
  const fontSettings = FONT_SETTINGS[textStyle]
  return (
    <>
      {link !== '' ? (
        <StyledLink to={link} target={target}>
          <Container fontSettings={fontSettings}>{children}</Container>
        </StyledLink>
      ) : (
        <Container fontSettings={fontSettings}>{children}</Container>
      )}
    </>
  )
}

export default Text

const Container = styled.div`
  font-family: ${(props) => props.fontSettings.fontFamily};
  font-size: ${(props) => props.fontSettings.fontSize.large};
  color: ${(props) => props.fontSettings.color};
  text-decoration: ${(props) => props.fontSettings.textDecoration};
  @media (max-width: 991px) {
    font-size: ${(props) => props.fontSettings.fontSize.small};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.grey};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${COLORS.black};
    cursor: pointer;
  }
`
