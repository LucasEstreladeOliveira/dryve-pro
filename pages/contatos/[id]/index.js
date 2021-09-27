import { useRouter } from 'next/router';
import { UsersContext } from '@/store'
import { useContext } from 'react'
import Image from 'next/image'
import returnIcon from '@/assets/return.svg'
import { HeadWrapper, ReturnButton, MainTitle, ContentWrapper, RightGrid } from './styled'
import EditInformations from '@/components/EditInformations/EditInformations'
import BuyIntent from '@/components/BuyIntent/BuyIntent'
import SellIntent from '@/components/SellIntent/SellIntent'
import Adverts from '@/components/Adverts/Adverts'
import Oportunities from '@/components/Oportunities/Oportunities'

const Editar = ()  => { 
  const { users } = useContext(UsersContext)

  const router = useRouter();
  const currentUser = users.filter( user => user.id == router.query.id)[0]

  return (
    <>
      <HeadWrapper>
        <ReturnButton onClick={() => router.push('/contatos')}>
          <Image src={returnIcon} layout="fixed" alt="voltar"/>
        </ReturnButton>
        <MainTitle>
          Editar contato
        </MainTitle>
      </HeadWrapper>
      <ContentWrapper>
        <EditInformations user={currentUser ? currentUser : {}} />
        <RightGrid>
          <BuyIntent />
          <SellIntent />
          <Adverts />
          <Oportunities />
        </RightGrid>
      </ContentWrapper>
    </>
  )
}

export default Editar