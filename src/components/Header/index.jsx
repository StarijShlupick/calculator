import { ContainerLayout } from '@/layouts'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import React from 'react'
import { HeaderUl, HeaderTitle, HeaderWrapper } from './components'
import { NavLink } from 'react-router-dom'

export const Header = props => {
  return (
    <HeaderWrapper {...props}>
      <ContainerLayout display="flex" align="center"
        justify="space-between" height="100%">
        <HeaderTitle {...props}>CalculatorApp</HeaderTitle>
        <HeaderUl>
          <NavLink to={HOME_PAGE_ROUTE} activeClassName="current"
            exact>
            <li>Home</li>
          </NavLink>
          <NavLink to={SETTINGS_PAGE_ROUTE} activeClassName="current"
            exact>
            <li>Settings</li>
          </NavLink>
        </HeaderUl>
      </ContainerLayout>
    </HeaderWrapper>
  )
}
