import React from "react"
import { KeypadGrid, KeypadWrapper } from "./components"
import { KeypadButton } from "../KeypadButton"
import { KEYPAD_BUTTONS } from "@/constants"

export class Keypad extends React.Component {
  render() {
    return (
      <KeypadWrapper>
        <KeypadGrid>
          {KEYPAD_BUTTONS.map(button => {
            return (<KeypadButton value={button.value} type={button.type}
key={button.value} />
            )
          })}
        </KeypadGrid>
      </KeypadWrapper>
    )
  }
}