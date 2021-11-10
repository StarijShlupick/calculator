import { GlobalStyles } from '@/globalStyles'
import { Header } from '@/components/Header'
import { HomePage } from '@/screens/HomePage'
import { SettingsPage } from '@/screens/SettingsPage'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { themes } from '@/theme'
import { getSelectedTheme, ThemeContext } from '@/contexts'
import { ErrorBoundary } from '@/components/ErrorBoundary'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
      selectTheme: this.selectTheme,
    }
    this.selectTheme = this.selectTheme.bind(this)
  }

  selectTheme = value => {
    const selectedTheme = getSelectedTheme(themes, value)
    this.setState({
      theme: themes[selectedTheme],
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyles theme={this.state.theme} />
          <Header />
          <Switch>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              render={() => (
                <ErrorBoundary>
                  <HomePage />
                </ErrorBoundary>
              )}
            />
            <Route
              exact
              path={SETTINGS_PAGE_ROUTE}
              render={() => (
                <ErrorBoundary>
                  <SettingsPage />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }
}
