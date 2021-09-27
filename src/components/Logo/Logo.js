import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import { ImageWrapper } from './styled'
import Link from 'next/link'


function Logo () {

  return (
    <Link href="/resumo">
      <ImageWrapper>
        <Image src={logo} alt="dryve-pro" layout="fixed"/>
      </ImageWrapper>
    </Link>
  ) 
}

export default Logo