import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.colors.secondaryLight};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 32px;
  font-size: 64px;
  line-height: 77px;
  font-weight: 400;
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  outline: none;
  transition: all .3s;
  &:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  &:active{
    transform: scale(95%);
  }
`
