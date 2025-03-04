import Image from 'next/image'
import logo from '@/public/wpc-logo.svg'

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-8">
      <Image
	src={logo}
	alt='Logo of Whole Presence Counseling, which resembles a hand illustration of a thick, imperfect black circle.'
	className="w-12 md:w-16"
      />
      <h1 className="text-2xl md:text-4xl leading-none font-bold">Whole Presence Counseling</h1>
    </header>
  )
}
