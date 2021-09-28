// vendors
import Image from 'next/image'

// assets
import houseCircleIcon from '@/assets/houseCircleIcon.svg'
import arrowDown from '@/assets/arrowDown.svg'

// styles
import { BusinessUnitWrapper } from './styled'


function BusinessUnit ({firstName = 'DryveOne', secondName = 'Frederico Boeri'}) {

  const businessUnit = `${firstName} - ${secondName}`
  return (
    <BusinessUnitWrapper>
      <Image src={houseCircleIcon} alt="business-unit" layout="fixed"/>
      <div>{businessUnit}</div>
      <Image src={arrowDown} alt="icon-down" layout="fixed"/>
    </BusinessUnitWrapper>
  ) 
}

export default BusinessUnit