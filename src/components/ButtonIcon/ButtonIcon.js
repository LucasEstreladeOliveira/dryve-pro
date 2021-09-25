import styled from 'styled-components'

export const ButtonIcon = styled.div`
  width: ${props => props.open ? 'auto' : '40px'};
  background: ${props => props.active ? '#0065FF' : 'transparent'} ;
  border-radius: 6px;
  height: ${props => props.open ? '18px' : '40px'};
  margin: 4px 0px;
  display: flex;
  align-items: center;
  color: ${props => props.active ? '#FFFFFF' : '#1D2C4B'};
  padding: ${props => props.open ? '11px' : 'unset'};
  border: 2px solid transparent;
  font-family: 'Inter';
  cursor: pointer;
  justify-content: ${props => props.open ? 'unset' : 'center'};
  
  >div {
    margin-right: ${props => props.open ? '11px' : 'unset'};
  }
  :hover {
    background: ${props => props.active ? '#0065FF' : '#0065FF65'} ;
    /* border: 2px solid #0065FF; */
  }
` 
export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
` 