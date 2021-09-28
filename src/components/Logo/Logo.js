// vendors
import Image from 'next/image'
import Link from 'next/link'

// assets
import logo from '@/assets/Logo.svg'

// styles
import { ImageWrapper } from './styled'


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