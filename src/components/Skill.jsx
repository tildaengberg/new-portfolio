import React from 'react'
import Text from './Text'
import styled from 'styled-components'
import { FaCode, FaDatabase, FaPenNib } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { COLORS } from '../config/colors'
import { GAP } from '../config/gap'

const icons = {
  code: <FaCode />,
  database: <FaDatabase />,
  pen: <FaPenNib />,
}

const Skill = ({ headline, children, icon }) => {
  const selectedIcon = icons[icon]
  return (
    <Wrapper>
      <IconContext.Provider
        value={{ color: `${COLORS.grey}`, size: '1.75rem' }}
      >
        {selectedIcon}
      </IconContext.Provider>
      <Text textStyle='h3'>{headline}</Text>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Skill

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  gap: ${GAP.xs};
  justify-items: center;
  max-width: 20vw;
  @media (max-width: 991px) {
    max-width: 80vw;
  }
`
