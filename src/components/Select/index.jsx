import React, { useEffect, useState } from 'react'
import { DropDownContainer, DropDownSelected, DropDownList, ListItem, DropDownSelectedLine } from './components'

export const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const options = ["Light theme", "Colored theme", "Dark theme"]
  useEffect(() => {
    setSelectedOption(options[0])
  }, [])

  const toggling = () => setIsOpen(!isOpen)
  
  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <DropDownContainer isOpen={isOpen}>
      <DropDownSelected isOpen={isOpen} onClick={toggling}>{selectedOption || "Light theme"}</DropDownSelected>
      {isOpen && (
      <DropDownList>
        <DropDownSelectedLine />
        {options.filter(option => {
          return option !== selectedOption
        }).map((option, index) => (
          <ListItem key={index} onClick={onOptionClicked(option)}>
            {option}
          </ListItem>
        ))
        }
      </DropDownList>
      )}
    </DropDownContainer>
  )
}