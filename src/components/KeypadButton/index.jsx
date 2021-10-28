import React from "react"
import { ButtonWrapper } from "./components"

export const KeypadButton = props => {
  return (
    <ButtonWrapper>
      {props.children}
    </ButtonWrapper>
  )
}