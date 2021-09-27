import styled from 'styled-components'

export const EditInformationsWrapper = styled.div`
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
  margin-right: 12px;
  height: fit-content;
` 
export const Divider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 16px;
`
export const Title = styled.div`
  margin: 0px 16px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  color: #1D2C4B;
  letter-spacing: -0.025em;
`
export const TypeUserSelectionWrapper = styled.div`
  margin: 0px 32px;
  
  .Mui-checked {
    .MuiSvgIcon-root:first-child {
      background: #0065FF !important;
      color: #0065FF !important;
      border-radius: 50% !important;
      width: 18px !important;
      height: 18px !important;
      
      path {
        fill: #0065FF !important;
      }
    }
    .MuiSvgIcon-root:nth-child(2) {
      height: 18px !important;
      width: 18px !important;
      
      path {
        fill: #FFFFFF !important;
      }
    }
  }
  
  .MuiRadio-root {
    .MuiSvgIcon-root {
      height: 18px !important;
      width: 18px !important;
      
      path {
        fill: #D1D1D1;
      }
    }
  }
  
  .MuiTypography-root {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    color: #1D2C4B;
    letter-spacing: -0.025em;
  }
`
export const FooterWrapper = styled.div`
  height: 70px;
  padding: 16px;
  border-top: 1px solid #EFEFEF;
  justify-content: end;
  display: flex;
` 