import styled from 'styled-components'
import { colors } from 'styles/colors'

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  .social-media-link {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    color: ${colors.white.main};
    background-color: ${colors.secondary.disabled};

    &:hover {
      background-color: ${colors.secondary.selected};
    }
  }
`
