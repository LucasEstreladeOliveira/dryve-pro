import styled from 'styled-components'

export const NotificationWrapper = styled.div`
  position: relative;
  cursor: pointer;
  `

export const NotificationAlert = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: ${ props => props.active ? 'block' : 'none'};
  border-radius: 50%;
  height: 8px;
  width: 8px;
  background: #FF5630;
`

