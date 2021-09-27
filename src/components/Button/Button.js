import Button from '@material-ui/core/Button'
import { ButtonWrapper } from './styled'
const CustomButton = ({label, size, action = () => {}, variant = 'contained', color = "primary" }) => {
  return (
    <ButtonWrapper>
      <Button onClick={action} size={size} variant={variant} color={color}>
        {label}
      </Button>
    </ButtonWrapper>
  ) 
}

export default CustomButton