import styled from 'styled-components'

export const BuyIntentWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 0px 0px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.025em;
  color: #1D2C4B;
` 
export const VehicleWrapper = styled.div`
  display: flex;
  padding: 16px;
  padding-bottom: 32px;
  justify-content: space-around;
  margin-top: 16px;

  >div:first-child {
    margin-right: 16px;
  }
  >div:last-child {
    margin-left: 16px;
  }
`
export const FooterWrapper = styled.div`
  height: 70px;
  padding: 16px;
  border-top: 1px solid #EFEFEF;
  justify-content: end;
  display: flex;

  >div:first-child {
    margin-right: 8px;
  }
   
  >a {
    background: #FFFFFF;
    border: 1px solid #CCE8FE;
    padding: 8px;
    width: fit-content;
    margin: unset;
    margin-left: 8px;
    color: #0065FF;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.025em;
    height: 38px;
  }
` 