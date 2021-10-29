import styled from 'styled-components'

export const ContainerLayout = styled.div`
  display: ${props => props.display || "block"};
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
  width: 100%;
  height: ${props => props.height || "auto"};
  max-width: 1920px;
  padding: 0 ${props => props.padding || props.theme.spaces[4]}px;
  padding-top: ${props => props.paddingTop || "0"}px;
  padding-bottom: ${props => props.paddingBottom || "0"}px;
  margin: 0 auto;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
`