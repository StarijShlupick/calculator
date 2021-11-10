import { clearHistory } from '@/actions'
import { CalculatorContext } from '@/utils'
import React from 'react'
import { connect } from 'react-redux'
import { ControlPanelButton, ControlPanelContainer } from './components'

class ControlPanel extends React.Component {
  render() {
    return (
      <ControlPanelContainer>
        <ControlPanelButton onClick={() => this.context.changeHistoryMode()}>
          {this.context.isHistoryFull ? 'Show last 5 expressions' : 'Show full history'}
        </ControlPanelButton>
        <ControlPanelButton onClick={() => this.props.clearHistory()}>
          Clear history
        </ControlPanelButton>
      </ControlPanelContainer>
    )
  }
}
ControlPanel.contextType = CalculatorContext

const mapDispatchToProps = () => {
  return {
    clearHistory,
  }
}

export default connect(null, mapDispatchToProps())(ControlPanel)
