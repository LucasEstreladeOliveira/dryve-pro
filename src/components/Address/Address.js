import { AddressWrapper, Title, InputGrid, InputGrid25, InputGrid7525 } from './styled'
import Input from '@/components/Input/Input'
// import Select from '@/components/Select/Select'

const Address = ({user}) => {
  return (
    <AddressWrapper>
      <Title>Endereço</Title>
      
      <InputGrid25>
        <Input label="CEP" value={user?.address?.zipcode}/>
      </InputGrid25>
        
      <InputGrid7525>
        <Input label="Endereço" value={user?.address?.street}/>
        <Input label="Número" value={user?.address?.suite}/>
      </InputGrid7525>
        
      <InputGrid>
        <Input label="Complemento" value={user?.address?.street}/>
        <Input label="Bairro" value={user?.address?.street}/>
      </InputGrid>
        
      <InputGrid7525>
        <Input label="Cidade" value={user?.address?.city}/>
        <Input label="Estado" value={user?.address?.street}/>
      </InputGrid7525>
        
    </AddressWrapper>
  )
}

export default Address