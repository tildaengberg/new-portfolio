import React from 'react'
import styled from 'styled-components'
import ProjectSection from './ProjectSection'
import minime from '../../assets/minime.jpg'
import About from '../../components/About'
import SkillsSection from './SkillsSection'
import { GAP } from '../../config/gap'
import Hero from '../../components/Hero'
import heroimg from '../../assets/hero/hero_alt3.jpg'
import { COLORS } from '../../config/colors'
import Text from '../../components/Text'

const Home = () => {
  return (
    <Container>
      <Hero
        headline='Hi, I am Tilda, a developer and this portfolio will show you...'
        image={heroimg}
      >
        ...what I can do with a keyboard and a cup of coffee ☕. Explore some of
        the projects I've been working on and see what I've been up to during my
        time at university and in my spare time. Keep scrolling to discover
        more!
      </Hero>
      <ProjectSection />
      <AboutWrapper id='about'>
        <About headline='There is no place like 127.0.0.1' image={minime}>
          I am a 24-year-old from Piteå, currently living and working as a developer in Stockholm.
          I hold an M.Sc. in Interaction and Design and a B.Sc. in Computer Science from Umeå University.
          In my spare time, I enjoy being out in nature or going for a run.
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
