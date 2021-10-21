import styled from 'styled-components'
import arrow from '../../assets/arrow.png'

export const DropDownContainer = styled.div`
  position: relative;
  width: 401px;
  min-height: 93px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 38px;
  padding-bottom: ${props => props.isOpen ? 8 : 0}px;
  overflow: hidden;
  transition: padding-bottom .1s;
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
  padding-top: 28px;
  padding-left: 27px;
  padding-bottom: ${props => props.isOpen ? 19 : 28}px;
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
  transition: all .3s;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryLight};
  }
`