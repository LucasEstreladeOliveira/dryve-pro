import Image from 'next/image'
import bellIcon from '../../assets/bellIcon.svg'
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