// import Image from 'next/image'
import { 
  Divider, 
  EditInformationsWrapper, 
  Title, 
  TypeUserSelectionWrapper, 
  FooterWrapper,
} from './styled'
import Button from '@/components/Button/Button'
import PersonalData from '@/components/PersonalData/PersonalData'
import Address from '@/components/Address/Address'
import Tags from '@/components/Tags/Tags'
import BankData from '@/components/BankData/BankData'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const EditInformations = ({user})  => { 
  return (
    <EditInformationsWrapper>
        <Title>
          Informações
        </Title>
      <Divider />
      <TypeUserSelectionWrapper>
        <FormControl component="fieldset">
          <RadioGroup
            row
            defaultValue="fisica"
            name="radio-buttons-group"
          >
            <FormControlLabel value="fisica" control={<Radio />} label="Pessoa Física" />
            <FormControlLabel value="juridica" control={<Radio />} label="Pessoa Jurídica" />
          </RadioGroup>
        </FormControl>
      </TypeUserSelectionWrapper>

      <PersonalData user={user} />
      <Address user={user} />
      <BankData user={user}/>
      <Tags />
      
      <FooterWrapper>
        <Button label="Salvar" size="medium"/>
      </FooterWrapper>
    </EditInformationsWrapper>

  )
}

export default EditInformations