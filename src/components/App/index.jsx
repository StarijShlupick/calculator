import React from 'react'
import { Header } from '../Header'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '@/screens/HomePage'
import { SettingsPage } from '@/screens/SettingsPage'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

export const App = () => (
  <main>
    <Header />
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route
        exact
        path={SETTINGS_PAGE_ROUTE}
        component={SettingsPage}
      />
    </Switch>
  </main>
)
