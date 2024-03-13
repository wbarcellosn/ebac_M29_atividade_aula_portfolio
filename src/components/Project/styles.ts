import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  width: 100%;
`
export const LinkBtn = styled.a`
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.btnBgColor};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`
