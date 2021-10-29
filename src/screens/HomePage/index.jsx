import React from "react"
import { ContainerLayout } from "@/layouts"
import { Calculator } from "@/components/Calculator"

export class HomePage extends React.Component {
  render() {
    return (
      <ContainerLayout padding="23" paddingTop="23.5"
        paddingBottom="26.5">
        <Calculator />
      </ContainerLayout>
    )
  }
}