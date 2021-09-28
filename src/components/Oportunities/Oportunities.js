// styles
import { ContentWrapper } from './styled'

// components
import DisplayContent from '@/components/DisplayContent/DisplayContent'
import Oportunity from '@/components/Oportunity/Oportunity'

// utils
import { oportunity1, oportunity2 } from '@/utils/oportunitiesData'

const SellIntent = ()  => { 
  return (
    <DisplayContent title="Oportunidades" maxHeight={195}>
      <ContentWrapper>
        <Oportunity oportunity={oportunity1}/>
        <Oportunity oportunity={oportunity2}/>
      </ContentWrapper>
    </DisplayContent>
  )
}

export default SellIntent