import { CalculatorContext } from '@/contexts'
import React from 'react'
import { connect } from 'react-redux'
import { HistoryItem } from '../HistoryItem'
import { HistoryAlert, HistoryContainer, HistoryHeader, HistoryListWrapper, HistoryList } from './components'

class History extends React.Component {
  render() {
    const list = this.context.isHistoryFull
    ? this.props.historyStack.map((expression, index) => <HistoryItem value={expression} key={index}/>)
    : this.props.historyStack.slice(-5).map(expression => <HistoryItem value={expression} key={Math.random()}/>)
    return (
      <HistoryContainer>
        <HistoryHeader>History</HistoryHeader>
        <HistoryListWrapper>
          <HistoryList data-test-history>
            {this.props.historyStack.length === 0 && (
              <HistoryAlert>There is no expressions yet</HistoryAlert>
            )}
            {list}
          </HistoryList>
        </HistoryListWrapper>
      </HistoryContainer>
    )
  }
}

History.contextType = CalculatorContext

const mapStateToProps = state => {
  return {
    historyStack: state.historyReducer,
  }
}

export default connect(mapStateToProps)(History)
