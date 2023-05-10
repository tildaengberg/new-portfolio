import React from 'react'
import Text from './Text'
import styled from 'styled-components'
import XsInfo from './XsInfo'
import { GAP } from '../config/gap'
import Box from '../config/Box'
import { COLORS } from '../config/colors'

const ProjectInfo = ({ headline, children, tools, duration, role, img }) => {
  return (
    <Container>
      <Box>
        <Wrapper>
          <TextWrapper>
            <Intro>
              <Text textStyle='h1'>{headline}</Text>
              <Text>{children}</Text>
            </Intro>
            <Info>
              <XsInfo headline='Tools'>{tools}</XsInfo>
              <XsInfo headline='Duration'>{duration}</XsInfo>
              <XsInfo headline='Role / Area'>{role}</XsInfo>
            </Info>
          </TextWrapper>
          <ImageWrapper src={img} />
        </Wrapper>
      </Box>
    </Container>
  )
}

export default ProjectInfo

const Container = styled.div`
  background-color: ${COLORS.green};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${GAP.s};
  padding-top: 10vh;
  align-items: start;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: ${GAP.xxs};
  }
`
const Intro = styled.div`
  display: grid;
  gap: ${GAP.xs};
`
const TextWrapper = styled.div`
  gap: ${GAP.s};
  display: grid;
  justify-items: start;
  padding-top: 5vh;
  @media (max-width: 991px) {
    grid-area: auto;
  }
`
const Info = styled.div`
  display: grid;
  gap: ${GAP.xs};
`

const ImageWrapper = styled.img`
  display: block;
  max-height: 70vh;
  margin-bottom: -5vh;
  @media (max-width: 991px) {
    grid-area: auto;
    max-width: 85vw;
  }
`
