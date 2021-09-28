import { MainTitle, ButtonGroup, HeadWrapper } from './styled'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import Input from '@/components/Input/Input';
import Image from 'next/image'
import filter from '@/assets/filter.svg'
import add from '@/assets/add.svg'
import ContactTable from '@/components/ContactTable/ContactTable'
import { UsersContext } from '@/contexts/users-context'
import { useEffect, useContext } from 'react'

const Contatos = ()  => {

  const { users, refreshUsers } = useContext(UsersContext)

  useEffect(() => {
    refreshUsers()
  }, [refreshUsers])

  return (
    <>
      <HeadWrapper>
        <MainTitle>
          Contatos
        </MainTitle>
        <Input placeholder="Buscar..." icon="search" iconPosition="end" />
        <ButtonGroup>
          <ButtonIcon open={true}>
            <Image src={filter} alt="filtrar" layout="fixed"/>
            Filtrar
          </ButtonIcon>
          <ButtonIcon open={true} active={true}>
            <Image src={add} alt="adicionar" layout="fixed"/>
            Adicionar
          </ButtonIcon>
        </ButtonGroup>
      </HeadWrapper>
      <ContactTable users={users ? users : []}/>
    </>
  )
}

export default Contatos