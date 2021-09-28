// vendors
import Image from 'next/image'

// styles
import { ContentWrapper } from './styled'

// assets
import addBlue from '@/assets/add-blue.svg'

// components
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import DisplayContent from '@/components/DisplayContent/DisplayContent'

const SellIntent = ()  => { 
  return (
    <DisplayContent title="Intenção de venda" maxHeight={160}>
      <ContentWrapper>
        <ButtonIcon open={true}>
          <Image src={addBlue} alt="filtrar" layout="fixed"/>
          Adicionar
        </ButtonIcon>
      </ContentWrapper>
    </DisplayContent>
  )
}

export default SellIntent