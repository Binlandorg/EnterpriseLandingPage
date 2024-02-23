import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const ContainerDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  padding: 0 0.625rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    height: 20.4rem;
    gap: 2.5rem;
  }
`
export const ItemDetails = styled.div`
  padding: 1.3rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${colors.secondary.disabled};
  border-radius: 0.9375rem;

  & span {
    opacity: 50%;
    font-weight: 400;
    font-size: clamp(0.875rem, 4vw, 1.5rem);
    line-height: 1.312rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  &:nth-child(3) {
    background-image: url('src/assets/images/imgAboutUs/people.svg');
    background-size: cover;
  }
`
export const Statistics = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
