// styles
import { 
  VehicleItemWrapper, 
  StatusWrapper, 
  Badge, 
  Date 
} from './styled'

// components
import VehicleInfo from '@/components/VehicleInfo/VehicleInfo'

function VehicleItem ({ vehicle }) {

  const resolvedDate = 
    vehicle?.due_date ? 
      vehicle?.due_date : 
      vehicle?.appointment_date ? 
        vehicle?.appointment_date :
        null;

  return (
    <VehicleItemWrapper>
      <VehicleInfo vehicle={vehicle} /> 
      <StatusWrapper>
        <Badge status={vehicle.status}>{ vehicle.status }</Badge>
        <Date>{ resolvedDate }</Date>
      </StatusWrapper>
    </VehicleItemWrapper>
  ) 
}

export default VehicleItem