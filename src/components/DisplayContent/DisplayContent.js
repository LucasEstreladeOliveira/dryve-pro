import { DisplayContentWrapper, Title, Divider } from './styled'

const DisplayContent = ({children, title, maxHeight=254, margin}) => {
  return (
    <DisplayContentWrapper maxHeight={maxHeight}>
      <Title>{title}</Title>
      <Divider />
      {children}
    </DisplayContentWrapper>
  )

}

export default DisplayContent