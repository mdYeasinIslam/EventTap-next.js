import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className=" bg-[url(/hero-bg.png)]">

      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src='/logo.png'
            alt="logo"
            width={500}
            height={500}
            className="w-6 h-6"
          />
          <span className="font-medium text-[#3a0e0e]">Event Tap</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[#3a0e0e] hover:text-pink-600 transition-colors">
            Home
          </Link>
          <Link href="/events" className="text-[#3a0e0e] hover:text-pink-600 transition-colors">
            Events
          </Link>
          <Link href="/places" className="text-[#3a0e0e] hover:text-pink-600 transition-colors">
            Places
          </Link>
          <Link href="/map-view" className="text-[#3a0e0e] hover:text-pink-600 transition-colors">
            Map View
          </Link>
        </nav>
        <Link href="/profile" className="flex items-center gap-1 text-[#3a0e0e] hover:text-pink-600 transition-colors">
          <span className="hidden md:inline">Profile</span>
        </Link>
      </nav>

    
    </header>
  )
}
