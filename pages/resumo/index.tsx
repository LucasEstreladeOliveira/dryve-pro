import DisplayInformation from '@/components/DisplayInformation/DisplayInformation'
import { MainTitle, SummaryGrid, DisplayInfo1, DisplayInfo2, DisplayInfo3, DisplayInfo4, Chart, Leads, TDV, TDD } from './styled'
import LeadsChart from "@/components/LeadsChart/LeadsChart"

export default function Resumo() {
  return (
    <div>
      <MainTitle>
        Resumo
      </MainTitle>
      
      <SummaryGrid>
        <DisplayInfo1>
          <DisplayInformation /> 
        </DisplayInfo1>
        <DisplayInfo2>
          <DisplayInformation title="Preço médio" value="R$ 41.5k" icon="price-tag"/> 
        </DisplayInfo2>
        <DisplayInfo3>
          <DisplayInformation title="Km médio" value="68.800 km" icon="speedo-meter"/> 
        </DisplayInfo3>
        <DisplayInfo4>
          <DisplayInformation title="Idade média do estoque" value="4 anos" icon="calendar"/> 
        </DisplayInfo4>
        <Chart>
          <LeadsChart /> 
        </Chart>
        <Leads>
          <DisplayInformation /> 
        </Leads>
        <TDV>
          <DisplayInformation /> 
        </TDV>
        <TDD>
          <DisplayInformation /> 
        </TDD>
      </SummaryGrid>
    </div>
  )
}
