import React from "react"
import { DisplayedValue, DisplayWrapper } from "./components"

export class Display extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <DisplayWrapper>
        <DisplayedValue>4500.233</DisplayedValue>
      </DisplayWrapper>
    )
  }
}