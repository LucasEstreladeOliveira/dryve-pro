import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import { ImageWrapper } from './styled'


function Logo () {
  return (
    <ImageWrapper>
      <Image src={logo} alt="dryve-pro" layout="fixed"/>
    </ImageWrapper>
  ) 
}

export default Logo