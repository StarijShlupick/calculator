import React from "react"
import { KeypadGrid, KeypadWrapper } from "./components"
import { KeypadButton } from "../KeypadButton"
import { KEYPAD_BUTTONS } from "@/constants"

export class Keypad extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <KeypadWrapper>
        <KeypadGrid>
          {KEYPAD_BUTTONS.map(buttonValue => {
            return (<KeypadButton key={buttonValue}>
              {buttonValue}
                    </KeypadButton>
            )
          })}
        </KeypadGrid>
      </KeypadWrapper>
    )
  }
}