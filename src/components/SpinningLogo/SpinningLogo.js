import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import { SpinningLogoWrapper, SpinningLogoContent, SpinningLogoSide, SpinningLogoBack } from './styled'

const SpinningLogo = () => {

  return (
    <SpinningLogoWrapper>
      <SpinningLogoContent>
        <SpinningLogoSide>
          <Image src={logo} alt="dryve-pro" layout="fixed"/>
        </SpinningLogoSide>
        <SpinningLogoBack>
          <Image src={logo} alt="dryve-pro" layout="fixed"/>
        </SpinningLogoBack>
      </SpinningLogoContent>
    </SpinningLogoWrapper>
  )
}

export default SpinningLogo