import styled from 'styled-components'

export const VehicleInfoWrapper = styled.div`
  display: flex;
`;
export const ImageWrapper = styled.div`
  width: 96px;
  height: 72px;
  margin: 8px 0px;
  >div {
    border-radius: 4px;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 16px;
`;
export const Label = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
export const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #A3A3A3;
  margin: 0px 4.67px;
  display: flex;
`;
export const Value = styled.div`
  color: #0065FF;
  font-weight: 600;
`;