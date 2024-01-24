import React from 'react'
import Text from '../../components/Text'
import Skill from '../../components/Skill'
import styled from 'styled-components'
import Box from '../../helpers/Box'
import { GAP } from '../../config/gap'

const SkillsSection = () => {
  const lineBreak = <br />
  return (
    <Container>
      <Text textStyle='h2'>Education</Text>
      <HorizontalGrid>
        <Wrapper>
          <div>
            <Text textStyle='h3'>M. sc. Interaction and design</Text>
            <Text>Umeå University | 2019 - 2024</Text>
          </div>
          <Text>During the years at the program I have gained experience in both UI/UX design and programming. But after I while I relasied that programming is my passion. The last two years at the education I decided to almost only focus on programming. </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Text textStyle='h3'>AI, Informatics, Reasearch and Innovation</Text>
            <Text>Universitat Politècnica de Catalunya  | 2023</Text>
          </div>
          <Text>In my fith year during the atumn I studied abroad in Barcelona. I took courses in their AI master program and gained much experience in that area. But besides the studies I met new friends, learned new cultures and had a lot of tapas. Both fun and challanging experience!</Text>
        </Wrapper>
      </HorizontalGrid>
    </Container>
  )
}

export default SkillsSection

const Container = styled(Box)`
  display: grid;
  gap: ${GAP.m};
  @media (max-width: 991px) {
    gap: ${GAP.s};
  }
`

const Wrapper = styled.div`
  display: grid;
  gap: ${GAP.xs};
`

const HorizontalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100vw;
  gap: ${GAP.m};
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: ${GAP.s};
  }
`