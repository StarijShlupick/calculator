import { CalculatorContext } from "@/utils"
import React from "react"
import { DisplayedValue, DisplayedValueWrapper, DisplayWrapper } from "./components"

export class Display extends React.Component {
  render() {
    return (
      <DisplayWrapper>
        <DisplayedValueWrapper>
          <DisplayedValue>{this.context.display.join('')}</DisplayedValue>
        </DisplayedValueWrapper>
      </DisplayWrapper>
    )
  }
}
Display.contextType = CalculatorContext