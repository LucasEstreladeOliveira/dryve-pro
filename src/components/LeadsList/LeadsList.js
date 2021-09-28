// styles
import { LeadsListWrapper, Title, ContentWrapper } from './styled'

// components
import LeadItem from '@/components/LeadItem/LeadItem'

function LeadsList ({title, leads}) {
  return (
    <LeadsListWrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        {leads.map((lead, index) => (
          <LeadItem 
            lead={lead} 
            position={
              index === 0 ? 
                'first' : 
                index === leads.length - 1 ? 
                  'last' : 
                  ''
            } 
            key={lead.label+index}
          />
        ))}
      </ContentWrapper>
    </LeadsListWrapper>
  ) 
}

export default LeadsList