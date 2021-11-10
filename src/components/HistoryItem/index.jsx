import { CalculatorContext } from '@/utils'
import React from 'react'
import { Operation } from './components'

export class HistoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.valueArray = this.props.value.split('')
  }

  render() {
    return (
      <Operation onClick={() => this.context.passHistoryExpression(this.props.value)}>
        {this.valueArray.map((symbol, index) =>
          <span key={index}>{symbol}</span>,
        )}
      </Operation>
    )
  }
}

HistoryItem.contextType = CalculatorContext
