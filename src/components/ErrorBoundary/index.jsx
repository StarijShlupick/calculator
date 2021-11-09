import { ContainerLayout } from "@/layouts"
import React from "react"
import { ErrorHeader, ErrorMessage, ErrorInfo, ErrorName } from "./components"

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ContainerLayout display="flex" direction="column"
          justify="center" align="center"
          height="60%">
          <ErrorHeader>Something went wrong!</ErrorHeader>
          <ErrorMessage>Please restart this application</ErrorMessage>
          <ErrorInfo>
            {this.state.error && this.state.error.toString()}
          </ErrorInfo>
        </ContainerLayout>
      )
    }
    return this.props.children
  }
}