import Text from './Text'
import styled from 'styled-components'
import { COLORS } from '../config/colors'

const Button = ({ children, active, onClick }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      <Text textStyle='button'>{children}</Text>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  background-color: ${(props) =>
    props.active ? `${COLORS.green}` : 'transparent'};
  display: inline-block;
  padding: 0.5rem 2.5rem;
  border-radius: 33px;
  border: 1px solid ${COLORS.black};
  border: ${(props) =>
    props.active ? `1px solid ${COLORS.green}` : `1px solid ${COLORS.black}`};
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (max-width: 991px) {
    padding: 0.5rem 2rem;
  }
`
