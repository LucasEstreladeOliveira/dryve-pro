import { VehicleInfoWrapper, ImageWrapper, InfoWrapper, Label, Info, Dot, Value } from './styled'
import Image from 'next/image'
import moneyFormat from '@/utils/moneyFormat'
import kilometersFormat from '@/utils/kilometersFormat'

const VehicleInfo = ({vehicle}) => {
  return (
    <VehicleInfoWrapper>
      <ImageWrapper>
        <Image src={vehicle.image} alt={vehicle.model_name} width={96} height={72}/>
      </ImageWrapper>
      <InfoWrapper>
        <Label>{ vehicle.model_name }</Label>
        <Info>{ vehicle.version_name }</Info>
        <Info>
          { vehicle.manufacturing_year } / { vehicle.model_year }
          <Dot />
          { vehicle.fuel_type }
        </Info>
        <Info>
          { kilometersFormat(vehicle.mileage) }
          <Dot />
          <Value>{ moneyFormat(vehicle.ad_selling_price) }</Value>
        </Info>
      </InfoWrapper>
    </VehicleInfoWrapper>
  )
} 

export default VehicleInfo