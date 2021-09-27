import Image from 'next/image'
import { LeadsItemWrapper, ImageWrapper, Label, Value, Info } from './styled'

function LeadsList ({lead, position}) {

  const currentIcon = require(`@/assets/${lead.icon}-logo.svg`)
  
  return (
    <LeadsItemWrapper position={position}>
      <ImageWrapper>
        <Image src={currentIcon} alt={lead.label} layout="fixed" height={32} width={32} />
      </ImageWrapper>
      <Info>
        <Label>{lead.label}</Label>
        <Value>{lead.count}</Value>
      </Info>
    </LeadsItemWrapper>
  ) 
}

export default LeadsList