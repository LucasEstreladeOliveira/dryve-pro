import DisplayInformation from '@/components/DisplayInformation/DisplayInformation'
import { MainTitle, SummaryGrid, DisplayInfo1, DisplayInfo2, DisplayInfo3, DisplayInfo4, Chart, Leads, TDV, TDD } from '@/styles/styledSummary'
import LeadsChart from "@/components/LeadsChart/LeadsChart"
import LeadsList from "@/components/LeadsList/LeadsList"
import VehicleList from "@/components/VehicleList/VehicleList"
import { VehiclesContext } from '@/contexts/vehicles-context'
import dateFormat from '@/utils/dateFormat'
import { useEffect, useContext } from 'react'

const Resumo = ()  => {

  const { vehicles, refreshVehicles } = useContext(VehiclesContext)

  useEffect(() => {
    refreshVehicles()
  }, [refreshVehicles])

  const leads = [
    {label: "OLX", count: 40, icon: "olx"},
    {label: "Webmotors", count: 29, icon: "webmotors"},
    {label: "iCarros", count: 18, icon: "icarros"},
    {label: "Autoline", count: 7, icon: "autoline"},
    {label: "Mercado Live", count: 5, icon: "mercado-livre"},
  ]


  const vehiclesDueDate = vehicles.map((vehicle, index) => {
    return {
      ...vehicle,
      due_date: `Há ${vehicles.length - index + 1} dias`,
      status: "Vencido"
    }
  })

  const vehiclesAppointment = vehicles.map((vehicle, index) => {
    return {
      ...vehicle,
      appointment_date: dateFormat(vehicles.length - index + 1, index + 8),
      status: "Agendado"
    }
  })
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
          <LeadsList title="Leads por portal (últimos 30 dias)" leads={leads}/> 
        </Leads>
        <TDV>
          <VehicleList vehicles={vehicles ? vehiclesDueDate : []} title="Test-drives vencidos" /> 
        </TDV>
        <TDD>
          <VehicleList vehicles={vehicles ? vehiclesAppointment : []} title="Test-drives do dia" /> 
        </TDD>
      </SummaryGrid>
    </div>
  )
}

export default Resumo