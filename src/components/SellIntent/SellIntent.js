import { 
  ContentWrapper,
} from './styled'
import addBlue from '@/assets/add-blue.svg'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import Image from 'next/image'
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