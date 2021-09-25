import styled from 'styled-components'

export const SideMenuButton = styled.div`
  height: auto;
  display: flex;
  justify-content: end;
  align-items: end;
  margin: ${ props => props.open ? '24px' : '32px'};
  margin-top: ${ props => props.open ? 'auto' : '32px'};
  position: ${ props => props.open ? '' : 'absolute'};
  bottom: ${ props => props.open ? 'unset' : '0'};
  cursor: pointer;
`
