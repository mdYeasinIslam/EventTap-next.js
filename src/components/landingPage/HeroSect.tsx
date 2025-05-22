import Link from 'next/link'
import React from 'react'

const HeroSect = () => {
  return (
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#2a0a0a] mb-6 max-w-3xl">Discover Events Around You</h1>
        <p className="text-[#3a0e0e] max-w-2xl mb-8 text-lg">
          Discover and participate in a rich variety of events designed to inspire, engage, and bring people together
          around shared interests, wherever life takes you.
        </p>
        <Link
          href="/events"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Explore Events
        </Link>
      </section>
  )
}

export default HeroSect