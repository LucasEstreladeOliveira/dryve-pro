import Image from 'next/image'
import avatar from '../../assets/avatar.svg'
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