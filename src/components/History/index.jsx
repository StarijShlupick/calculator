import React from "react"
import { connect } from "react-redux"
import { HistoryItem } from "../HistoryItem"
import { HistoryAlert, HistoryContainer, HistoryHeader, HistoryListWrapper, HistoryList } from "./components"

class History extends React.Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryHeader>History</HistoryHeader>
        <HistoryListWrapper>
          <HistoryList>
            {this.props.historyStack.length === 0 && (
              <HistoryAlert>There is no expressions yet</HistoryAlert>
            )}
            {this.props.historyStack.map((expression, index) => {
              return (<HistoryItem value={expression} key={index}/>)
            })}
          </HistoryList>
        </HistoryListWrapper>
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