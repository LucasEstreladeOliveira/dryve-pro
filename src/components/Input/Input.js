import Image from 'next/image'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { InputWrapper } from './styled'

function handleIconPosition(iconPosition, icon) {
  if(!icon) return;

  return iconPosition === 'end' ?
    {
      endAdornment: (
        <InputAdornment position="end">
          <Image src={icon} alt="input-icon" layout="fixed"/>
        </InputAdornment>
      )
    } :
    {
      startAdornment: (
        <InputAdornment position="start">
          <Image src={icon} alt="input-icon" layout="fixed"/>
        </InputAdornment>
      )
    }
}
const Input = ({ placeholder, icon, iconPosition, label, value}) => {
  
  const resolvedIcon = icon ? require(`@/assets/${icon}.svg`) : false 

  return (
    <InputWrapper>
      <TextField
        id="filled-textarea"
        placeholder={placeholder}
        size="small"
        label={label ? label : ''}
        defaultValue={value ? value : null}
        InputProps={handleIconPosition(iconPosition, resolvedIcon)}
      />
    </InputWrapper>
  )

}

export default Input