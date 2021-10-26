import React from 'react'
import { Selector } from '@/components/Select'
import { THEMES_LIST } from '@/constants/themes'
import { ThemeContext } from '@/utils'

export const ThemeSelector = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, selectTheme }) => (
        <Selector options={THEMES_LIST} selected={theme.name}
          functionality={selectTheme} />
      )}
    </ThemeContext.Consumer>
  )
}