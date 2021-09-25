import Image from 'next/image'
import gearIcon from '../../assets/gearIcon.svg'
import { SettingsWrapper } from './styled'


function Settings () {
  return (
    <SettingsWrapper>
      <Image src={gearIcon} alt="business-unit" layout="fixed"/>
    </SettingsWrapper>
  ) 
}

export default Settings