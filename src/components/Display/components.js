import styled from "styled-components"

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 138px;
  width: 100%;
  padding-right: 91.5px;
  padding-bottom: 30.5px;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
`
export const DisplayedValue = styled.div`
  font-size: 64px;
  line-height: 77px;
  color: ${props => props.theme.colors.textPrimary};
`