import React from 'react'
import { Selector } from '@/components/Select'
import { THEMES_LIST } from '@/constants/themes'
import { ThemeContext } from '@/utils/themeContext'

export const ThemeSelector = () => {
  return (
  <ThemeContext.Consumer>
    {({theme, pickTheme}) => (
        <Selector options={THEMES_LIST} selected={theme}
functionality={pickTheme} />
      )}
  </ThemeContext.Consumer>
  )
}