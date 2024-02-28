import { NavLink } from 'react-router-dom'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const StyledListItem = styled.li`
  list-style-type: none;
`

export const StyledAnchor = styled(NavLink)`
  color: ${colors.primary.main};
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.25rem 0.25rem;
  display: flex;
  flex-direction: column;

  /** we use this to style the current selected navbar item */
  &[aria-current='page'] {
    color: blue;
  }

  &.is-active {
    color: red;
  }

  &:hover {
    color: ${colors.primary.hover};
    border-radius: 0.125rem;
  }

  &:active,
  &:focus {
    outline: 0.125rem solid ${colors.primary.focus};
    border-radius:0.375rem;
    color: ${colors.primary.focus};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }
`
