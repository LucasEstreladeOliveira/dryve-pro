// vendors
import Image from 'next/image'

// assets
import bellIcon from '@/assets/bellIcon.svg'

// styles
import { NotificationWrapper, NotificationAlert } from './styled'


function Notification () {

  const active = true;
  
  return (
    <NotificationWrapper>
      <NotificationAlert active={active} />
      <Image src={bellIcon} alt="business-unit" layout="fixed"/>
    </NotificationWrapper>
  ) 
}

export default Notification