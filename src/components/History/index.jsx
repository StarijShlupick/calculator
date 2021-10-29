import React from "react"
import { HistoryContainer, HistoryHeader, Operation, OperationListWrapper, OperationsList } from "./components"

export class History extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <HistoryContainer>
        <HistoryHeader>History</HistoryHeader>
        <OperationListWrapper>
          <OperationsList>
            <Operation>200+450</Operation>
            <Operation>100*2</Operation>
            <Operation>200+450</Operation>
            <Operation>100*2</Operation>
            <Operation>200+450</Operation>
            <Operation>200+450</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
            <Operation>100*2</Operation>
          </OperationsList>
        </OperationListWrapper>

      </HistoryContainer>
    )
  }
}