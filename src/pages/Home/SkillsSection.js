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
      <SkillsContainer>
        <Text textStyle='h2'>My main skills</Text>
        <Items>
          <Skill headline='Frontend' icon='code'>
            Frontend is my biggest interest, and it is exciting to explore new
            frameworks.
          </Skill>
          <Skill headline='Backend' icon='database'>
            Backend development is an area that I have mostly explored and want
            to expand my knowledge in.
          </Skill>
          <Skill headline='UX/UI' icon='pen'>
            I like to design everything from paper prototypes to finished HiFi
            prototypes.
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
  align-items: start;
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
