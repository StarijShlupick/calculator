import React from "react"
import { Display } from "../Display"
import { Keypad } from "../Keypad"
import { History } from "../History"
import { CalculatorWrapper, FunctionalContainer } from "./components"

export class Calculator extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <CalculatorWrapper>
        <FunctionalContainer>
          <Display />
          <Keypad />
        </FunctionalContainer>
        <History />
      </CalculatorWrapper>
    )
  }
}