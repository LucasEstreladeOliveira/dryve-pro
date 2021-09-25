import Image from 'next/image'
import Notification from '../Notification/Notification'
import { MenuOptionsWrapper } from './styled'
import Avatar from '../Avatar/Avatar'
import Settings from '../Settings/Settings'


function MenuOptions () {

  return (
    <MenuOptionsWrapper>
      <Notification />
      <Settings />
      <Avatar />
    </MenuOptionsWrapper>
  ) 
}

export default MenuOptions