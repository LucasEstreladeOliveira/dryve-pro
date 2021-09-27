import styled from 'styled-components'

export const LeadsItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: ${ props => props.position === 'last' ? 'unset' : '17px'};
  border-bottom: ${ props => props.position === 'last' ? 'unset' : '1px solid #EFEFEF'};
  margin-top: ${ props => props.position === 'first' ? 'unset' : '8px'};
`;
export const ImageWrapper = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #F9F9F9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1D2C4B;
  letter-spacing: -0.025em;
  `;
export const Value = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #0065FF;
  letter-spacing: -0.025em;
`;
export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;