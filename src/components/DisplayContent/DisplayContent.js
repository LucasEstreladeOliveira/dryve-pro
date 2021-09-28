// styles
import { DisplayContentWrapper, Title, Divider } from './styled'

const DisplayContent = ({children, title, maxHeight=254}) => {
  return (
    <DisplayContentWrapper data-testid="wrapper" maxHeight={maxHeight}>
      <Title data-testid="title">{title}</Title>
      <Divider />
      {children}
    </DisplayContentWrapper>
  )

}

export default DisplayContent