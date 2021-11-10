import styled from 'styled-components'

export const ControlPanelContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: end;
  padding: 0 28.5px 7.5px 28.5px;
  width: 100%;
  height: 200px;
`
export const ControlPanelButton = styled.button`
  display: block;
  padding: 10px;
  width: 40%;
  height: 150px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 32px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  color: ${props => props.theme.colors.textPrimary};
  line-height: 38px;
  background-color: ${props => props.theme.colors.secondaryLight};
  transition: transform .3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: translateY(-3%);
  }
  &:active {
    transform: translateY(+3%);
  }
`
