// vendors
import Button from '@material-ui/core/Button'

// styles
import { ButtonWrapper } from './styled'

const CustomButton = ({label, size, action = () => {}, variant = 'contained', color = "primary" }) => {
  return (
    <ButtonWrapper data-testid="button">
      <Button onClick={action} size={size} variant={variant} color={color}>
        {label}
      </Button>
    </ButtonWrapper>
  ) 
}

export default CustomButton