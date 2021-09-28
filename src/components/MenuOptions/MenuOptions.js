// components
import Notification from '@/components/Notification/Notification'
import Avatar from '@/components/Avatar/Avatar'
import Settings from '@/components/Settings/Settings'

// styles
import { MenuOptionsWrapper } from './styled'

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