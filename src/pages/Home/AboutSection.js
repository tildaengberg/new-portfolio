import React from 'react'
import Box from '../../config/Box'
import minime from '../../assets/minime.jpg'
import About from '../../components/About'
import { COLORS } from '../../config/colors'
import styled from 'styled-components'

const AboutSection = () => {
  return (
    <AboutWrapper>
      <Box>
        <About headline='There is no place like 127.0.0.1' image={minime}>
          I am a 22-year-old student from Piteå who is currently studying for a
          master's degree in Interaction and Design at Umeå University. I am
          currently in my fourth year of the program and continue to learn new
          things every day. I like both UX/UI design but am currently mostly
          focused on developing my skills in programming. In my spare time I
          like to be out in nature and exercise, with the time that is left I
          often have small side projects just for fun.
        </About>
      </Box>
    </AboutWrapper>
  )
}

export default AboutSection

const AboutWrapper = styled.div`
  background-color: ${COLORS.green};
`
