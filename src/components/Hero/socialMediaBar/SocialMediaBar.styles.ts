import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from 'styles/colors'

interface IProps {
  type: string
  direction: string
}

const typeDirection = (direction: string) => {
  switch (direction) {
    case 'row':
      return `
        flex-direction: row;
        padding: 0.75rem 1rem;
      `
    case 'column':
      return `
        flex-direction: column;
        padding: 1rem 0.75rem;
      `
    default:
      break
  }
}

const TypeStyles = (type: string) => {
  switch (type) {
    case 'primary':
      return `
        background-color: ${colors.secondary.main};
      `
    case 'secondary':
      return `
        background-color: ${colors.secondary.selected};
      `
    default:
      break
  }
}

export const SocialMediaBarWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  border-radius: 0 1rem 1rem 0;
  gap: 0.75rem;
  margin-right: auto;
  ${(props) => typeDirection(props.direction)}
  ${(props) => TypeStyles(props.type)}
`

export const WrapperIcon = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  display: grid;
  place-content: center;
  border-radius: 100%;

  &:hover {
    background-color: ${colors.secondary.hover};
  }
`

export const LinkIcon = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.white.main};
  cursor: pointer;
`
