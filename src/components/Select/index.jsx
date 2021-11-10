import React, { useState } from 'react'
import { SelectWrapper, DropDownContainer, DropDownSelected, DropDownList, ListItem, DropDownSelectedLine, DropDownBase } from './components'

export const Selector = props => {
  const { options, selected, functionality: setSelectedState } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selected)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setSelectedState(value)
    setIsOpen(false)
  }

  return (
    <SelectWrapper>
      <DropDownContainer isOpen={isOpen}>
        <DropDownSelected isOpen={isOpen} onClick={toggling}>{selectedOption}</DropDownSelected>
        {isOpen && (
          <DropDownList>
            <DropDownSelectedLine />
            {options.filter(option => option !== selectedOption)
              .map(option =>
                <ListItem key={option} onClick={onOptionClicked(option)}>
                  {option}
                </ListItem>)
            }
          </DropDownList>
        )}
      </DropDownContainer>
      {isOpen && (
        <DropDownBase />
      )}
    </SelectWrapper>
  )
}
