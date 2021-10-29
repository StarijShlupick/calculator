import styled from "styled-components"

export const CalculatorWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 19.5px;
`
export const FunctionalContainer = styled.div`
  max-width: 1463px;
  width: 100%;
  padding-right: 23px;
  margin-right: 23px;
  border-right: 2px solid ${props => props.theme.colors.secondary};
`