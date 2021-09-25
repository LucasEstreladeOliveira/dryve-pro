import styled from 'styled-components'

export const MenuOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 24px;
  height: 100%;

  >div:first-child {
    margin-right: 30px;
  }

  >div:last-child {
    margin-left: 30px;
  }
`