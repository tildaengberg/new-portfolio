import React from 'react'
import styled from 'styled-components'
import ProjectSection from './ProjectSection'
import minime from '../../assets/minime.jpg'
import About from '../../components/About'
import SkillsSection from './SkillsSection'
import { GAP } from '../../config/gap'
import Hero from '../../components/Hero'
import hero from '../../assets/hero_alt.jpg'
import { COLORS } from '../../config/colors'
import Text from '../../components/Text'

const Home = () => {
  return (
    <Container>
      <Hero
        headline='Hi, I am Tilda, a student and future developer and this portfolio will show you...'
        image={hero}
      >
        ...what I can do with a keyboard and a cup of coffee ☕. Explore some of
        the projects I've been working on and see what I've been up to during my
        time at university and in my spare time. Keep scrolling to discover
        more!
      </Hero>
      <ProjectSection />
      <AboutWrapper id='about'>
        <About headline='There is no place like 127.0.0.1' image={minime}>
          I am a 23-year-old student from Piteå who is currently studying for a
          master's degree in Interaction and Design at Umeå University. I'm currently in my fifth and last year of the program,
          approaching the end of my studies.
        </About>
      </AboutWrapper>
      <SkillsSection />
      <Footer>
        <Text>Talk more?</Text>
        <Text>tildaengberg@hotmail.com</Text>
      </Footer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: grid;
  gap: ${GAP.xl};
  padding-bottom: ${GAP.xl};
`
const AboutWrapper = styled.div`
  background-color: ${COLORS.green};
`

const Footer = styled.div`
text-align: center;
`
