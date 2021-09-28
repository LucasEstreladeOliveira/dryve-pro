// styles
import { BankDataWrapper, Title, InputGrid, InputGrid25, InputGrid7525 } from './styled'

// components
import Input from '@/components/Input/Input'

const Address = ({user}) => {
  return (
    <BankDataWrapper>
      <Title>Dados Bancários</Title>
      
      <Input label="Banco" value={user?.address?.zipcode}/>
      
      <InputGrid>
        <Input label="Tipo de conta" value={user?.address?.street}/>
        <Input label="Agência" value={user?.address?.street}/>
        <Input label="Conta" value={user?.address?.street}/>
        <Input label="Digito" value={user?.address?.street}/>
      </InputGrid>
        
    </BankDataWrapper>
  )
}

export default Address