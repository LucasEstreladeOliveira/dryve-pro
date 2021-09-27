import { TagsWrapper, Title } from './styled'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import Image from 'next/image'
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