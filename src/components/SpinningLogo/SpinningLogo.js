// vendors
import Image from 'next/image'

// assets
import logo from '@/assets/Logo.svg'

// styles
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