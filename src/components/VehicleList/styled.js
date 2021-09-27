import styled from 'styled-components'

export const VehicleListWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 0px;
  height: 344px;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.025em;
  color: #1D2C4B;
`;
export const Title = styled.div`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  color: #1D2C4B;
  letter-spacing: -0.025em;
  margin: 0px 16px;
`
export const Divider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 16px;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-left: 16px;
`;