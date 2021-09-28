// vendors
import Image from 'next/image'

// assets
import avatar from '@/assets/avatar.svg'

// styles
import { AvatarWrapper, OuterCircle, InnerCircle } from './styled'

function Avatar () {

  const active = true;
  
  return (
    <OuterCircle active={active}>
      <InnerCircle>
        <AvatarWrapper>
          <Image src={avatar} alt="business-unit" layout="fixed"/>
        </AvatarWrapper>
      </InnerCircle>
    </OuterCircle>
  ) 
}

export default Avatar