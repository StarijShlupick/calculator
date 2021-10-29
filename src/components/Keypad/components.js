import styled from "styled-components"

export const KeypadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 28.5px;
  padding-bottom: 7.5px;
`
export const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 46px;
  width: 100%;
  &>*{
    align-self: center;
    justify-self: center;
  }
`