import React from 'react'
import Text from './Text'
import styled from 'styled-components'

const XsInfo = ({ headline, children }) => {
  return (
    <Wrapper>
      <Text textStyle='h4'>{headline}</Text>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default XsInfo

const Wrapper = styled.div``
