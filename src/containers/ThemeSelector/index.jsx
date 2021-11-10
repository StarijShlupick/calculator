import { Selector } from '@/components/Select'
import { THEMES_LIST } from '@/constants/themes'
import { ThemeContext } from '@/utils'
import React, { useContext } from 'react'

export const ThemeSelector = () => {
  const context = useContext(ThemeContext)
  return (
    <React.Fragment>
      <Selector options={THEMES_LIST} selected={context.theme.name}
                functionality={context.selectTheme} />
    </React.Fragment>
  )
}
