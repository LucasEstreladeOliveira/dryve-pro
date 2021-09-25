import Image from 'next/image'
import { Title, ContentWrapper, Value, DisplayInformationWrapper, ImageWrapper } from './styled'
import carBlue from '@/assets/car-blue.svg'; 
import priceTag from '@/assets/price-tag.svg'; 
import speedoMeter from '@/assets/speedo-meter.svg'; 
import calendar from '@/assets/calendar.svg'; 

function DisplayInformation ({title = 'Veículos publicados', value = '26', icon = 'car-blue'}) {
  
  let currentIcon;
  switch (icon) {
    case 'car-blue':
      currentIcon = carBlue;
      break;
    case 'price-tag':
      currentIcon = priceTag;
      break;
    case 'speedo-meter':
      currentIcon = speedoMeter;
      break;
    case 'calendar':
      currentIcon = calendar;
      break;
    default:
      currentIcon = carBlue;
      break;
  }
  
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