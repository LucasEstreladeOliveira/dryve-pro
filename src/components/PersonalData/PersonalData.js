import { PersonalDataWrapper, Title, InputGrid } from './styled'
import Input from '@/components/Input/Input'
// import Select from '@/components/Select/Select'
import { format, parseISO } from 'date-fns'

const PersonalData = ({user}) => {
  return (
    <PersonalDataWrapper>
      <Title>Dados Pessoais</Title>
      
      <InputGrid>
        <Input label="Nome" value={user.name}/>
        
        <Input label="Sobrenome" value={user.name}/>
        
        <Input label="E-mail" value={user.email}/>
        
        <Input label="Telefone" value={user.phone}/>
        
        <InputGrid>
          <Input label="Nascimento" value={format(parseISO(new Date().toISOString()), 'dd/MM/yyyy')}/>

          <Input label="Gênero" value="Masculino"/>
          {/* <Select /> */}
        </InputGrid>
        
        <InputGrid>  
          <Input label="RG" value={user?.address?.zipcode}/>
          
          <Input label="CPF" value={user?.address?.zipcode}/>
        </InputGrid>
      
      </InputGrid>
    </PersonalDataWrapper>
  )
}

export default PersonalData