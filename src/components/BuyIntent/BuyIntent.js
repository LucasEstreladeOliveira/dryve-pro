import { 
  FooterWrapper,
  VehicleWrapper,
} from './styled'
import Button from '@/components/Button/Button'
import VehicleInfo from '@/components/VehicleInfo/VehicleInfo'
import addBlue from '@/assets/add-blue.svg'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import Image from 'next/image'

import DisplayContent from '@/components/DisplayContent/DisplayContent'

const BuyIntent = ()  => {

  const vehicle1 = {
    "evaluation_type": "remote",
    "version_uuid": "3bfbb488-4a5c-4dba-b1ce-46003c18c3a6",
    "mileage": 37303,
    "model_year": 2018,
    "name": "TITANIUM 2.0 16V TB 248CV 4x4 4P",
    "transmission_type": "Automático",
    "fuel_type": "Gasolina",
    "vehicle_uuid": "6bf5ccd9-17ef-455c-aef9-c1b797329936",
    "model_name": "FUSION",
    "manufacturing_year": 2017,
    "version_name": "TITANIUM 2.0 16V TB",
    "image": "https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/6bf5ccd9-17ef-455c-aef9-c1b797329936/showroom/external/front_right_10x.jpeg",
    "brand_name": "FORD",
    "ad_selling_price": 103990.0000,
    "model_uuid": "8872911d-0bbc-45c0-9d1e-de66d098b808",
    "brand_uuid": "7cdb22f3-5da4-45c4-bb45-677a6a3fb819"
  } 
  const vehicle2 = {
    "evaluation_type": "presential",
    "version_uuid": "b0c12112-0b72-4420-9254-ed125e6c3a2b",
    "mileage": 89541,
    "model_year": 2014,
    "name": "EXL 2.0 16V FLEX 155CV 4x2 4P",
    "transmission_type": "Automático",
    "fuel_type": "Etanol/Gasolina",
    "vehicle_uuid": "14ada4a4-7033-4b1f-9578-8a654b711d70",
    "model_name": "CR-V",
    "manufacturing_year": 2014,
    "version_name": "EXL 2.0 16V FLEX",
    "image": "https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/14ada4a4-7033-4b1f-9578-8a654b711d70/showroom/external/front_right_10x.jpeg",
    "brand_name": "HONDA",
    "ad_selling_price": 69900.0000,
    "model_uuid": "c7061453-2199-4be3-84fd-9ea17ec93667",
    "brand_uuid": "8b452147-e524-4d59-9de7-7cc0997eff20"
  } 

  return (
    <DisplayContent title="Intenção de compra" maxHeight="fit-content">
      <VehicleWrapper>
        <VehicleInfo vehicle={vehicle1}/>
        <VehicleInfo vehicle={vehicle2}/>
      </VehicleWrapper>
      <FooterWrapper>
        <Button label="Ver Todos" size="medium" variant="text" color="primary"/>
        <ButtonIcon open={true}>
          <Image src={addBlue} alt="filtrar" layout="fixed"/>
          Adicionar
        </ButtonIcon>
      </FooterWrapper>
    </DisplayContent>
  )
}

export default BuyIntent