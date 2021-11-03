import React from "react"
import { connect } from "react-redux"
import { HistoryAlert, HistoryContainer, HistoryHeader, Operation, OperationListWrapper, OperationsList } from "./components"

class History extends React.Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryHeader>History</HistoryHeader>
        <OperationListWrapper>
          <OperationsList>
            {this.props.historyStack.length === 0 && (
              <HistoryAlert>There is no expressions yet</HistoryAlert>
            )}
            {this.props.historyStack.map(expression => {
              return (<Operation onClick={() => console.log(expression)} key={expression}>{expression}</Operation>)
            })}
          </OperationsList>
        </OperationListWrapper>
      </HistoryContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    historyStack: state.historyReducer,
  }
}

export default connect(mapStateToProps)(History)