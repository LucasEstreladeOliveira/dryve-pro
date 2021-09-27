import styled from 'styled-components'

export const ButtonIcon = styled.a`
  width: ${props => props.open ? 'auto' : '40px'};
  background: ${props => props.active ? '#0065FF !important' : 'transparent'} ;
  border-radius: 6px;
  height: ${props => props.open ? 'auto' : '40px'};
  font-size: ${props => props.open ? '15px' : 'unset'};
  margin: 4px 0px;
  display: flex;
  align-items: center;
  color: ${props => props.active ? '#FFFFFF !important' : '#1D2C4B'};
  padding: ${props => props.open ? '7px' : 'unset'};
  border: ${props => props.active ? '2px solid transparent !important' : '2px solid transparent'};
  font-family: 'Inter';
  cursor: pointer;
  letter-spacing: -0.025em;
  justify-content: ${props => props.open ? 'unset' : 'center'};
  
  >div {
    margin-right: ${props => props.open ? '11px' : 'unset'};
  }
` 
export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
` 