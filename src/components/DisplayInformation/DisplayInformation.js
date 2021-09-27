import Image from 'next/image'
import { Title, ContentWrapper, Value, DisplayInformationWrapper, ImageWrapper } from './styled'

function DisplayInformation ({title = 'Veículos publicados', value = '26', icon = 'car-blue'}) {  
  
  const currentIcon = require(`@/assets/${icon}.svg`)
  
  return (
    <DisplayInformationWrapper>
      <Title>{title}</Title>
      <ContentWrapper>
      <Value>{value}</Value>
      <ImageWrapper>
        <Image src={currentIcon} alt="business-unit" layout="fixed"/>
      </ImageWrapper>
      </ContentWrapper>
    </DisplayInformationWrapper>
  ) 
}

export default DisplayInformation