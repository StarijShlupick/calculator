import styled from 'styled-components'

export const ContainerLayout = styled.div`
  display: ${props => props.display || "block"};
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
  width: 100%;
  height: 100%;
  max-width: 1920px;
  padding: 0 ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
`