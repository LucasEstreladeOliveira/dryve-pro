// styles
import { TagsWrapper, Title } from './styled'

// components
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'

// vendors
import Image from 'next/image'

// assets
import addBlue from '@/assets/add-blue.svg'

const Tags = () => {
  return (
    <TagsWrapper>
      <Title>Tags</Title>
      <ButtonIcon open={true}>
        <Image src={addBlue} alt="filtrar" layout="fixed"/>
        Adicionar
      </ButtonIcon>
    </TagsWrapper>
  )
}

export default Tags