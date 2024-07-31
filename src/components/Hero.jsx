import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import { GAP } from '../config/gap'
import Box from '../helpers/Box'
import { COLORS } from '../config/colors'
import { Link } from 'react-scroll'
import backgroundSvg from '../assets/lines.svg';

const Hero = ({ headline, children, image }) => {
  return (
    <Container>
      <Navbar>
        <Text textStyle='navbar' link='/' navbar='true'>
          Tilda Engberg
        </Text>
      </Navbar>
      <Box>
        <Wrapper>
          <TextWrapper>
            <Text textStyle='h1'>{headline}</Text>
            <Text>{children}</Text>
            <Link to='about' smooth={true} duration={500}>
              <Button>Contact me!</Button>
            </Link>
          </TextWrapper>
          <ImageWrapper src={image} />
        </Wrapper>
      </Box>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background-image: url(${backgroundSvg});
  background-color: ${COLORS.green}; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`

const Navbar = styled.div`
  max-width: 100vw;
  height: 5vh;
  padding: ${GAP.s} 0 0 ${GAP.s};
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
