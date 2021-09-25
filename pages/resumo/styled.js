import styled from 'styled-components'

export const MainTitle = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px ;
  margin-bottom: 32px;
`

export const SummaryGrid = styled.div`
  font-family: 'Inter';
  display: grid;
  grid-template:
      "displayInfo1 displayInfo2 displayInfo3 displayInfo4" auto
      "chart chart chart leads" auto
      "tdv tdv tdd tdd" auto;
  grid-gap: 24px;
  grid-template-columns: 25% 25% 25% 25%;
  width: Calc(100% - 72px);
`

export const DisplayInfo1 = styled.div`
  grid-area: displayInfo1;
`
export const DisplayInfo2 = styled.div`
  grid-area: displayInfo2;
`
export const DisplayInfo3 = styled.div`
  grid-area: displayInfo3;
`
export const DisplayInfo4 = styled.div`
  grid-area: displayInfo4;
`
export const Chart = styled.div`
  grid-area: chart;
`
export const Leads = styled.div`
  grid-area: leads;
`
export const TDV = styled.div`
  grid-area: tdv;
`
export const TDD = styled.div`
  grid-area: tdd;
`