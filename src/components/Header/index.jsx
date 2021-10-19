import { ContainerLayout, FlexContainer } from "@/layouts"
import React from "react"
import { HeaderUl, HeaderTitle, HeaderWrapper } from "./components"
import { NavLink } from "react-router-dom"

export const Header = props => {
  return (
  <HeaderWrapper {...props}>
    <ContainerLayout display="flex" align="center"
justify="space-between">
      <HeaderTitle {...props}>CalculatorApp</HeaderTitle>
      <HeaderUl>
        <NavLink to="/" activeClassName="current"
exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/settings" activeClassName="current"
exact>
          <li>Settings</li>
        </NavLink>
      </HeaderUl>
    </ContainerLayout>
  </HeaderWrapper>
  )
}