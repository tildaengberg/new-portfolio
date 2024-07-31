import React from 'react'
import Text from '../../components/Text'
import styled from 'styled-components'
import { GAP } from '../../config/gap'

const SkillsSection = () => {
  return (
      <Container>
      <HorizontalGrid>
        <Text textStyle='h3'>Education</Text>
        <Wrapper>
          <Text>M.Sc. Interaction and Design</Text>
          <Text>2019 - 2024</Text>
          <Text>Umeå University</Text>
        </Wrapper>
        <Wrapper>
          <Text>B.Sc. Computer Science</Text>
          <Text>2019 - 2024</Text>
          <Text>Umeå University</Text>
        </Wrapper>
        <Wrapper>
          <Text>Exchange semester - Master's degree AI</Text>
          <Text>2023</Text>
          <Text>Universitat Politecnica de Catalunya, Barcelona</Text>
        </Wrapper>
      </HorizontalGrid>
      <HorizontalGrid>
        <Text textStyle='h3'>Tools</Text>
          <Wrapper>
            <Text>Frontend</Text>
            <Text>HTML/CSS | JavaScript | React.js | TypeScript | Cypress.io | Tailwind | styled-components</Text>
          </Wrapper>
          <Wrapper>
            <Text>Backend</Text>
            <Text>Java | C# | SQL | MongoDB | Express | Node.js | GraphQL | .NET | Python</Text>
          </Wrapper>
      </HorizontalGrid>
    </Container>
  )
}

export default SkillsSection

const Container = styled.div`
  display: grid;
  width: 70vw;
  grid-auto-flow: column;
  padding: 0 15vw ${GAP.l} 15vw;
  align-items: start;
  gap: ${GAP.s};
  @media (max-width: 991px) {
    gap: ${GAP.s};
    grid-auto-flow: row;
    width: 85vw;
    padding: 0 7.5vw ${GAP.l} 7.5vw;
  }
`

const Wrapper = styled.div`
  display: grid;
`

const HorizontalGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  max-width: 30vw;
  gap: ${GAP.s};
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: ${GAP.s};
    max-width: 100%;
  }
`