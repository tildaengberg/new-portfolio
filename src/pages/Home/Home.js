import React from 'react'
import styled from 'styled-components'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import { GAP } from '../../config/gap'
import Hero from '../../components/Hero'
import test from '../../assets/Me.jpg'

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
      <AboutSection />
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
