import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import { GAP } from '../config/gap'
import Box from '../config/Box'
import { COLORS } from '../config/colors'
import { Link } from 'react-scroll'

const Hero = ({ headline, children, image }) => {
  return (
    <Container>
      <Box>
        <Wrapper>
          <TextWrapper>
            <Text textStyle='h1'>{headline}</Text>
            <Text>{children}</Text>
            <Link to='about' smooth={true} duration={500}>
              <Button>Contact me!</Button>
            </Link>
          </TextWrapper>
          <ImageWrapper src={image}></ImageWrapper>
        </Wrapper>
      </Box>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background-color: ${COLORS.green};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10vh;
  align-items: start;
  justify-items: center;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 3vh;
    gap: ${GAP.xs};
  }
`

const TextWrapper = styled.div`
  gap: ${GAP.xs};
  display: grid;
  justify-items: start;
  padding-top: 5vh;
  @media (max-width: 991px) {
    grid-area: auto;
  }
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
