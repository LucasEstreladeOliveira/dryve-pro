import styled from 'styled-components'

export const MainTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.025em;
  color: #1D2C4B;
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const HeadWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const ButtonGroup = styled.div`
  margin-left: auto;
  display: flex;

  >a {
    background: #FFFFFF;
    border: 1px solid #CCE8FE;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    margin: 8px
  }
  >a:last-child {
    margin-right: unset
  }
`