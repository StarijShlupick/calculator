import { AddCharacterCommand, CalculatorContext, CalculatorLogic, ClearAllCommand, ComputeCommand, PassExpressionFromHistory } from '@/utils'

import React from 'react'
import { Display } from '../Display'
import { Keypad } from '../Keypad'
import ControlPanel from '../ControlPanel'
import History from '../History'
import { CalculatorContainer, CalculatorWrapper, FunctionalContainer } from './components'

export class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.calculator = new CalculatorLogic
    this.state = {
      calculator: this.calculator,
      display: this.calculator.value,
      isHistoryFull: false,
      pressButton: this.pressButton,
      passHistoryExpression: this.passHistoryExpression,
      changeHistoryMode: this.changeHistoryMode,
    }
    this.pressButton = this.pressButton.bind(this)
    this.passHistoryExpression = this.passHistoryExpression.bind(this)
    this.changeHistoryMode = this.changeHistoryMode.bind(this)
  }

  pressButton = (value, type) => {
    switch (type) {
      case 'clear':
        this.calculator.undo()
        this.setState({
          display: this.calculator.value,
        })
        break
      case 'clearAll':
        this.calculator.execute(new ClearAllCommand())
        this.setState({
          display: this.calculator.value,
        })
        break
      case 'equal':
        this.calculator.execute(new ComputeCommand())
        this.setState({
          display: this.calculator.value,
        })
        break
      default:
        this.calculator.execute(new AddCharacterCommand(value))
        this.setState({
          display: this.calculator.value,
        })
    }
  }

  passHistoryExpression = value => {
    this.calculator.execute(new PassExpressionFromHistory(value))
    this.setState({
      display: this.calculator.value,
    })
  }

  changeHistoryMode = () => {
    this.setState(state => {
      return { isHistoryFull: !state.isHistoryFull }
    })
  }

  render() {
    return (
      <CalculatorContext.Provider value={this.state}>
        <CalculatorContainer>
          <CalculatorWrapper>
            <FunctionalContainer>
              <Display />
              <Keypad />
              <ControlPanel />
            </FunctionalContainer>
            <History />
          </CalculatorWrapper>
        </CalculatorContainer>
      </CalculatorContext.Provider>
    )
  }
}
