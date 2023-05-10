import React from 'react'
import Text from '../../components/Text'
import Skill from '../../components/Skill'
import styled from 'styled-components'
import Box from '../../config/Box'
import { GAP } from '../../config/gap'

const SkillsSection = () => {
  const lineBreak = <br />
  return (
    <Container>
      <SkillsContainer>
        <Text textStyle='h2'>My main skills</Text>
        <Items>
          <Skill headline='Frontend' icon='code'>
            Frontend is my biggest intrest and it is excitning to try out new
            frameworks.
          </Skill>
          <Skill headline='Backend' icon='database'>
            Frontend is my biggest intrest and it is excitning to try out new
            frameworks.
          </Skill>
          <Skill headline='UX/UI' icon='pen'>
            Frontend is my biggest intrest and it is excitning to try out new
            frameworks.
          </Skill>
        </Items>
      </SkillsContainer>
      <InfoBlock>
        <Text>Talk more?</Text>
        <Text>Contact me: {lineBreak}tildaengberg@hotmail.com</Text>
      </InfoBlock>
    </Container>
  )
}

export default SkillsSection

const Container = styled.div`
  display: grid;
  gap: ${GAP.xl};
`

const SkillsContainer = styled(Box)`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: ${GAP.m};
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${GAP.m};
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: ${GAP.s};
  }
`

const InfoBlock = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: ${GAP.s};
  text-align: center;
  padding-top: ${GAP.m};
`
