// styles
import { VehicleListWrapper, ContentWrapper, Title, Divider } from './styled'

// components
import VehicleItem from "@/components/VehicleItem/VehicleItem"
function VehicleList ({ vehicles, title }) {

  return (
    <VehicleListWrapper>
      <Title>{title}</Title>
      <Divider />
      <ContentWrapper>
        {vehicles.map((vehicle, index) => (
          <VehicleItem vehicle={vehicle} key={vehicle.vehicle_uuid+index}/>
        ))}
      </ContentWrapper>
    </VehicleListWrapper>
  ) 
}

export default VehicleList