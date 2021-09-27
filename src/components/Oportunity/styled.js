import styled from 'styled-components'

export const OportunityWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 8%);
  border-radius: 6px;
  padding: 16px;
  display: flex;
`;
export const InfoWrapper = styled.div`
  margin-right: 37px;
  display: grid;
  grid-gap: 8px;
`;
export const Name = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.025em;
  color: #1D2C4B;
  `;
export const Info = styled.div`
  display: flex;
  `;
export const Label = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.025em;
  color: #1D2C4B;
  margin-right: 4px;
`;
export const Value = styled.div`
  font-family: Inter;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.025em;
  color: #1D2C4B;
`;
export const LeadWrapper = styled.div`
  display: flex;

  >div:last-child {
    margin-left: -8px;
  }
`;
export const ImageWraper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;

  >div {
    border-radius: 50%;
    background: #F9F9F9;
    >img {
      object-fit: ${ props => props.lead ? 'unset' : 'cover'};
    }
  }
`;