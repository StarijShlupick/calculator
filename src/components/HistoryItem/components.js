import styled from 'styled-components'

export const Operation = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 50px;
  cursor: pointer;
`
