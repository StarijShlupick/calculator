import React, { useState } from 'react'
import { SelectWrapper, DropDownContainer, DropDownSelected, DropDownList, ListItem, DropDownSelectedLine, DropDownBase } from './components'

export const Selector = ({ options, defaultValue, handleSelection: onSelect }) => {
  const [config, setConfig] = useState({
    opened: false,
    selected: defaultValue,
  })

  const toggling = () => setConfig({
    ...config,
    opened: !config.opened,
  })

  const onOptionClicked = value => () => {
    setConfig({
      opened: false,
      selected: value,
    })
    onSelect(value)
  }

  return (
    <SelectWrapper>
      <DropDownContainer isOpen={config.opened}>
        <DropDownSelected isOpen={config.opened} onClick={toggling}>{config.selected}</DropDownSelected>
        {config.opened && (
          <DropDownList>
            <DropDownSelectedLine />
            {options.filter(option => option !== config.selected)
              .map(option =>
                <ListItem key={option} onClick={onOptionClicked(option)}>
                  {option}
                </ListItem>)
            }
          </DropDownList>
        )}
      </DropDownContainer>
      {config.opened && (
        <DropDownBase />
      )}
    </SelectWrapper>
  )
}
