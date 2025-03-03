import Image from 'next/image'
import logo from '@/public/wpc-logo.svg'

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-4">
      <Image
	src={logo}
	alt='Logo of Whole Presence Counseling'
	className="w-12"
      />
      <h1 className="text-2xl font-bold">Whole Presence Counseling</h1>
    </header>
  )
}
