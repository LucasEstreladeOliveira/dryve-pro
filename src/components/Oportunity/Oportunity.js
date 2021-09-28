// styles
import { 
  OportunityWrapper,
  InfoWrapper,
  Name,
  Info,
  Label,
  Value,
  LeadWrapper,
  ImageWraper
} from './styled'

// vendors
import Image from 'next/image'

// utils
import moneyFormat from '@/utils/moneyFormat'

const Oportunity = ({oportunity})  => { 
  const resolvedLeadImg = require(`@/assets/${oportunity?.lead}-logo.svg`)
  
  return (
      <OportunityWrapper>
        <InfoWrapper>
          <Name>
            {oportunity.name}
          </Name>
          <Info>
            <Label>Valor:</Label>
            <Value>{ moneyFormat(oportunity.value) }</Value>
          </Info>
          <Info>
            <Label>Data:</Label>
            <Value>{oportunity.date}</Value>
          </Info>
        </InfoWrapper>
        <LeadWrapper>
          <ImageWraper lead>
            <Image src={resolvedLeadImg} layout="fill" />
          </ImageWraper>
          <ImageWraper>
            <Image src={oportunity.image} layout="fill" />
          </ImageWraper>
        </LeadWrapper>
      </OportunityWrapper>
  )
}

export default Oportunity