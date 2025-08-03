import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-8">
      <Image
        src="wpc-logo.svg"
        alt="Logo of Whole Presence Counseling, which resembles a hand illustration of a thick, imperfect black circle."
        className="w-12 md:w-16"
        width={1372.047241}
        height={1372.047241}
      />
      <h1 className="text-2xl md:text-4xl leading-none font-bold">
        Whole Presence Counseling
      </h1>
    </header>
  );
}
