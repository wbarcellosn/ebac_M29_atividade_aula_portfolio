import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`
export const Button = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`
