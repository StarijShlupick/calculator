import styled from 'styled-components'
import arrow from '../../assets/arrow.png'


export const SelectWrapper = styled.div`
  position: relative;
`
export const DropDownBase = styled.div`
  max-width: 401px;
  min-width: 280px;
  width: 100%;
  height: 94px;
`
export const DropDownContainer = styled.div`
  position: ${props => props.isOpen ? 'absolute' : 'relative'};
  left: 0;
  right: 0;
  max-width: 401px;
  min-width: 280px;
  width: 100%;
  min-height: 93px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  color: ${props => props.theme.colors.textPrimary};
  line-height: 38px;
  padding-bottom: ${props => props.isOpen ? 5 : 0}px;
  background-color: ${props => props.isOpen ? props.theme.colors.secondaryLight : props.theme.colors.textSecondary};
  overflow: hidden;
  z-index: 3;
  cursor: pointer;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    top: 38px;
    right: 25px;
    width: 29px;
    height: 25px;
    background-image: url(${arrow});
    pointer-events: none;
    transition: transform .2s;
    transform: rotate(${props => props.isOpen ? 180 : 0}deg);
  }
`
export const DropDownSelected = styled.div`
  padding-top: 26px;
  padding-left: 27px;
  padding-bottom: ${props => props.isOpen ? 19 : 26}px;
  background-color: ${props => props.theme.colors.backgound};
  transition: background-color .3s;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryLight};
  }
`
export const DropDownSelectedLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.secondary};
`
export const DropDownList = styled.ul`
`
export const ListItem = styled.li`
  padding: 12px 0px 12px 27px;
  list-style: none;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.backgound};
  transition: all .3s;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryLight};
  }
`