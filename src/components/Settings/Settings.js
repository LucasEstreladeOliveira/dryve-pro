// vendors
import Image from 'next/image'

// assets
import gearIcon from '@/assets/gearIcon.svg'

// styles
import { SettingsWrapper } from './styled'

function Settings () {
  return (
    <SettingsWrapper>
      <Image src={gearIcon} alt="business-unit" layout="fixed"/>
    </SettingsWrapper>
  ) 
}

export default Settings