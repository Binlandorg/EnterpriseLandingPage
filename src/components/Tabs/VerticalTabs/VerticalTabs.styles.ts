import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const VerticalTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

export const TabsWrapper = styled.ul`
  min-width: fit-content;
  display: none;

  @media only screen and (min-width: ${breakpoints.md}) {
    display: block;
  }

`

export const SelectService = styled.div`
  

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`

export const SingleTab = styled.li`
  list-style: none;
  color: ${colors.secondary.main};
  opacity: 50%;
  font-weight: 500;
  padding: 1rem 2rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  cursor: pointer;

  &.selected {
    background: ${colors.body};
    opacity: 1;
    color: ${colors.secondary.main};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 21.875rem;
  display: flex;
  flex-direction: column;
  background: ${colors.body};
  border-radius: 1rem;
  border-top-left-radius: 0;
  padding: 0.75rem;

  &:not(.top-left-rounded) {
    border-top-left-radius: 1rem;
  }
`
