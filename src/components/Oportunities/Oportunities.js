import { 
  ContentWrapper,
} from './styled'
import DisplayContent from '@/components/DisplayContent/DisplayContent'
import Oportunity from '@/components/Oportunity/Oportunity'

const SellIntent = ()  => { 

  const oportunity1 = {
    name: 'Pedro Gandra de Carvalho',
    value: 30900,
    date: '21 de junho',
    image: 'https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/6bf5ccd9-17ef-455c-aef9-c1b797329936/showroom/external/front_right_10x.jpeg',
    lead: 'olx',
  }

  const oportunity2 = {
    name: 'Pedro Gandra de Carvalho',
    value: 90000,
    date: '12 de junho',
    image: 'https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/14ada4a4-7033-4b1f-9578-8a654b711d70/showroom/external/front_right_10x.jpeg',
    lead: 'mercado-livre',
  }

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