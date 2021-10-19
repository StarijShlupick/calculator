import styled from 'styled-components'

export const HeaderWrapper = styled.nav`
  height: 120px;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
`
export const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;

  list-style: none;
  a {
    text-decoration: none;
  }
  li {
    margin-left: 32px;
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 38px;
    color: ${props => props.theme.colors.white};
    opacity: 70%;
    transition: all .3s;
    &:hover {
      opacity: 100%;
    }
  }
  .current {
    li {
      box-shadow: 0px 2px 0px ${props => props.theme.colors.white};
      opacity: 100%;
    }
  }
`
export const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 38px;
  font-weight: 400;
  color: ${props => props.theme.colors.white};
`