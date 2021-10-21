import styled from 'styled-components'

export const SettingsHeader = styled.h2`
  font-size: ${props => props.theme.fontSizes[8]}px;
  line-height: 77px;
  font-weight: 400;
  margin: 60px 0 46px;
`
export const SwitchThemeHeader = styled.h6`
  padding-left: 7px;
  margin-bottom: 7px;
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 29px;
  font-weight: 400;
`
export const SettingsContentWrapper = styled.div`
  padding-left: 7px;
  &>* {
    margin-bottom: 32px;
  }
`