import React from "react"
import { Display } from "../Display"
import { Keypad } from "../Keypad"
import History from "../History"
import { CalculatorWrapper, FunctionalContainer } from "./components"
import { AddCharacterCommand, CalculatorContext, CalculatorLogic, ClearAllCommand, ComputeCommand } from "@/utils"

export class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.calculator = new CalculatorLogic
    this.state = {
      calculator: this.calculator,
      pressButton: this.pressButton,
      display: this.calculator.value,
    }
    this.pressButton = this.pressButton.bind(this)
  }

  pressButton = (value, type) => {
    const charValue = value
    const charType = type
    switch (charType) {
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
        this.calculator.execute(new AddCharacterCommand(charValue))
        this.setState({
          display: this.calculator.value,
        })
    }
  }

  render() {
    return (
      <CalculatorContext.Provider value={this.state}>
        <CalculatorWrapper>
          <FunctionalContainer>
            <Display />
            <Keypad />
          </FunctionalContainer>
          <History />
        </CalculatorWrapper>
      </CalculatorContext.Provider>
    )
  }
}