import Image from 'next/image'
import logo from '@/public/wpc-logo.svg'

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-4">
      <Image
	src={logo}
	alt='Logo of Whole Presence Counseling, which resembles a hand illustration of a thick, imperfect black circle.'
	className="w-12"
      />
      <h1 className="text-2xl font-bold">Whole Presence Counseling</h1>
    </header>
  )
}
