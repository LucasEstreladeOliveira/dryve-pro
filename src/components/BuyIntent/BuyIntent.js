// vendors
import Image from 'next/image'

// styles
import { FooterWrapper, VehicleWrapper } from './styled'

// components
import Button from '@/components/Button/Button'
import VehicleInfo from '@/components/VehicleInfo/VehicleInfo'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import DisplayContent from '@/components/DisplayContent/DisplayContent'

// assets
import addBlue from '@/assets/add-blue.svg'

// utils
import { vehicle1, vehicle2 } from '@/utils/vehilesData'

const BuyIntent = ()  => {
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