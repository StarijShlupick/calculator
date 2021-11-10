import { KEYPAD_BUTTONS } from '@/constants'
import React from 'react'
import { KeypadGrid, KeypadWrapper } from './components'
import { KeypadButton } from '../KeypadButton'

export class Keypad extends React.Component {
  render() {
    return (
      <KeypadWrapper>
        <KeypadGrid>
          {KEYPAD_BUTTONS.map(button =>
            <KeypadButton value={button.value} type={button.type}
                          key={button.value} />)}
        </KeypadGrid>
      </KeypadWrapper>
    )
  }
}
