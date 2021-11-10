import { Selector } from '@/components/Select'
import { ThemeContext } from '@/contexts'
import { THEMES_LIST } from '@/constants'
import React, { useContext } from 'react'

export const ThemeSelector = () => {
  const context = useContext(ThemeContext)
  return (
    <React.Fragment>
      <Selector options={THEMES_LIST} defaultValue={context.theme.name}
                handleSelection={context.selectTheme} />
    </React.Fragment>
  )
}
