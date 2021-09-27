import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SpinningLogo from '@/components/SpinningLogo/SpinningLogo'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/resumo');
  }, [])

  return (
    <SpinningLogo />
  )
}
