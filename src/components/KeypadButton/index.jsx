import { CalculatorContext } from '@/contexts'
import React from 'react'
import { ButtonWrapper } from './components'

export class KeypadButton extends React.Component {
  render() {
    return (
      <ButtonWrapper onClick={() => this.context.pressButton(this.props.value, this.props.type)}>
        {this.props.value}
      </ButtonWrapper>
    )
  }
}

KeypadButton.contextType = CalculatorContext
