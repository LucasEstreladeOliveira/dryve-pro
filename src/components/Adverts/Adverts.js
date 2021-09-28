// styles
import { ContentWrapper } from './styled'

// components
import DisplayContent from '@/components/DisplayContent/DisplayContent'

const Adverts = ()  => { 
  return (
    <DisplayContent title="Anúncios" maxHeight={184}>
      <ContentWrapper>
        Este contato não possui anúncios vinculados.
      </ContentWrapper>
    </DisplayContent>
  )
}

export default Adverts