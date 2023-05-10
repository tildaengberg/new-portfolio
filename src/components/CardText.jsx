import Text from './Text'
import styled from 'styled-components'
import { GAP } from '../config/gap'
import Responsive from 'react-responsive'

const Mobile = (props) => <Responsive {...props} maxWidth={991} />
const Desktop = (props) => <Responsive {...props} minWidth={992} />

const CardText = ({ headline, children, imageSrc, flipped = false }) => {
  return (
    <Wrapper>
      <Desktop>
        {flipped ? (
          <>
            <TextWrapper>
              <Text textStyle='h2'>{headline}</Text>
              <Text>{children}</Text>
            </TextWrapper>
            <ImageWrapper>
              <img src={imageSrc} alt='Project' />
            </ImageWrapper>
          </>
        ) : (
          <>
            <ImageWrapper>
              <img src={imageSrc} alt='Project' />
            </ImageWrapper>
            <TextWrapper>
              <Text textStyle='h2'>{headline}</Text>
              <Text>{children}</Text>
            </TextWrapper>
          </>
        )}
      </Desktop>
      <Mobile>
        <TextWrapper>
          <Text textStyle='h2'>{headline}</Text>
          <Text>{children}</Text>
        </TextWrapper>
        <ImageWrapper>
          <img src={imageSrc} alt='Project' />
        </ImageWrapper>
      </Mobile>
    </Wrapper>
  )
}

export default CardText

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${GAP.xl};
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: ${GAP.xs};
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 30vw;
    height: auto;
  }
  @media (max-width: 991px) {
    img {
      max-width: 85vw;
    }
  }
`
