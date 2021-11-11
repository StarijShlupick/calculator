import { AddCharacterCommand, CalculatorLogic, ClearAllCommand, ComputeCommand, PassExpressionCommand } from '@/services'
import { CalculatorContext } from '@/contexts'
import { CALCULATE_SYMBOL, CLEAR_SYMBOL, REFRESH_SYMBOL } from '@/constants'
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
      case CLEAR_SYMBOL:
        this.calculator.undo()
        this.setState({
          display: this.calculator.value,
        })
        break
      case REFRESH_SYMBOL:
        this.calculator.execute(new ClearAllCommand())
        this.setState({
          display: this.calculator.value,
        })
        break
      case CALCULATE_SYMBOL:
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
    this.calculator.execute(new PassExpressionCommand(value))
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
