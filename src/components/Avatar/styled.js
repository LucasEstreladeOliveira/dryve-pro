import styled from 'styled-components'

export const AvatarWrapper = styled.div`
  cursor: pointer
`

export const OuterCircle = styled.div`
  border-radius: 50%;
  background: ${ props => props.active ? '#0065FF' : '#FFFFFF'};
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerCircle = styled.div`
  border-radius: 50%;
  border-color: white;
  height: 32px;
  width: 32px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  >div {
    height: 28px !important;
  }
`

