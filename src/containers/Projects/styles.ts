import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 36px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`
