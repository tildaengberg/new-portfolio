import React, { useEffect, useState } from 'react'
import Text from './Text'
import styled from 'styled-components'
import { GAP } from '../config/gap'

const CardText = ({ headline, children, imageSrc, flipped = false }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
    })
  }

  return (
    <Wrapper>
      {dimensions.width < 991 ? (
        <>
          <TextWrapper>
            <Text textStyle='h2'>{headline}</Text>
            <Text>{children}</Text>
          </TextWrapper>
          <ImageWrapper>
            <img src={imageSrc} alt='Project' />
          </ImageWrapper>
        </>
      ) : flipped ? (
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
