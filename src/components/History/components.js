import styled from "styled-components"

export const HistoryContainer = styled.div`
  max-width: 335px;
  width: 100%;
`
export const HistoryHeader = styled.h3`
  text-align: center;
  margin: 6.5px 0 50px;
  padding: 0;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  color: ${props => props.theme.colors.textPrimary};
`
export const HistoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 800px;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 11px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
  }
`
export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  align-items: flex-start;
  list-style: none;
`
export const HistoryAlert = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: ${props => props.theme.colors.primary};
`