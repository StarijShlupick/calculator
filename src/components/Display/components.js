import styled from "styled-components"

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 138px;
  width: 100%;
  padding-right: 91.5px;
  padding-bottom: 30.5px;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 11px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
  }
`
export const DisplayedValueWrapper = styled.div`
  text-align: right;
`
export const DisplayedValue = styled.div`
  font-size: 64px;
  line-height: 77px;
  color: ${props => props.theme.colors.textPrimary};
`