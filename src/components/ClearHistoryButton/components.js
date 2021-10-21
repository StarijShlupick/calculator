import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  text-align: left;
  padding-left: 27px;
  padding-top: 26px;
  padding-bottom: 26px;
  max-width: 401px;
  min-width: 280px;
  width: 100%;
  min-height: 93px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 38px;
  background-color: ${props => props.theme.colors.secondaryLight};
  transition: transform .3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: translateY(-3%);
  }
`