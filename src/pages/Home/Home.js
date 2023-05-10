import React from 'react'
import styled from 'styled-components'
import ProjectSection from './ProjectSection'
import minime from '../../assets/minime.jpg'
import About from '../../components/About'
import SkillsSection from './SkillsSection'
import { GAP } from '../../config/gap'
import Hero from '../../components/Hero'
import test from '../../assets/Me.jpg'
import { COLORS } from '../../config/colors'

const Home = () => {
  return (
    <Container>
      <Hero
        headline='Hi, I am Tilda, a student and future developer and this portfolio will show you...'
        image={test}
      >
        ...what I can do with a keyboard and a cup of coffee ☕. Explore some of
        the projects I've been working on and see what I've been up to during my
        time at university and in my spare time. Keep scrolling to discover
        more!
      </Hero>
      <ProjectSection />
      <AboutWrapper id='about'>
        <About headline='There is no place like 127.0.0.1' image={minime}>
          I am a 22-year-old student from Piteå who is currently studying for a
          master's degree in Interaction and Design at Umeå University. I am
          currently in my fourth year of the program and continue to learn new
          things every day. I like both UX/UI design but am currently mostly
          focused on developing my skills in programming. In my spare time I
          like to be out in nature and exercise, with the time that is left I
          often have small side projects just for fun.
        </About>
      </AboutWrapper>
      <SkillsSection />
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
