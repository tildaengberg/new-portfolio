import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { IconContext } from 'react-icons'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { COLORS } from '../config/colors'
import { GAP } from '../config/gap'

const About = ({ headline, children, image }) => {
  return (
    <Container>
      <ImageWrapper src={image} />
      <TextWrapper>
        <Text textStyle='h2'>{headline}</Text>
        <Text>{children}</Text>
        <ContactFacebook>
          <IconContext.Provider
            value={{ color: `${COLORS.grey}`, size: '1.75rem' }}
          >
            <FaEnvelope />
          </IconContext.Provider>
          <Text to='mailto:tildaengberg@hotmail.com'>
            tildaengberg@hotmail.com
          </Text>
        </ContactFacebook>
        <ExternalLinks>
          <IconContext.Provider
            value={{ color: `${COLORS.grey}`, size: '1.75rem' }}
          >
            <FaLinkedin />
          </IconContext.Provider>
          <Text
            textStyle='link'
            link='https://www.linkedin.com/in/tildaengberg/'
            target='_blank'
          >
            LinkedIn
          </Text>
        </ExternalLinks>
        <ExternalLinks>
          <IconContext.Provider
            value={{ color: `${COLORS.grey}`, size: '1.75rem' }}
          >
            <FaGithub />
          </IconContext.Provider>
          <Text
            textStyle='link'
            link='https://github.com/tildaengberg'
            target='_blank'
          >
            GitHub
          </Text>
        </ExternalLinks>
      </TextWrapper>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10rem;
  align-items: center;
  width: 70vw;
  padding: ${GAP.l} 15vw ${GAP.l} 15vw;
  @media (max-width: 991px) {
    grid-template-columns: auto;
    gap: ${GAP.s};
    width: 85vw;
    padding: ${GAP.l} 7.5vw ${GAP.l} 7.5vw;
  }
`

const TextWrapper = styled.div`
  gap: ${GAP.s};
  display: grid;
  justify-items: start;
  grid-area: 1 / 1 / 2 / 2;
`

const ImageWrapper = styled.img`
  display: grid;
  max-width: 20vw;
  @media (max-width: 991px) {
    max-width: 85vw;
  }
`

const ContactFacebook = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: ${GAP.xs};
`

const ExternalLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: ${GAP.xs};
`
