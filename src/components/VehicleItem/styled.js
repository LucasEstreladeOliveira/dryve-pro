import styled from 'styled-components'

export const VehicleItemWrapper = styled.div`
  display: flex;
  color: #1D2C4B;
  letter-spacing: -0.025em;
  border-bottom: 1px solid #EFEFEF;
  margin-right: 16px;
`;
export const StatusWrapper = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  margin-right: 18px;
  align-self: center;
  align-items: center;
`;
export const Badge = styled.div`
  background: ${props => props.status === 'Vencido' ? '#FFAB00' : '#CCE8FE'};
  border-radius: 500px;
  color: ${props => props.status === 'Vencido' ? '#FFFFFF' : '#000000'};
  padding: 4px 8px;
  letter-spacing: -0.025em;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const Date = styled.div`
  color: #666666;
  letter-spacing: -0.025em;
  font-size: 12px;
`;