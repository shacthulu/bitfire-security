import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto p-8 justify-center mt-32 sm:mt-64' role="main">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 font-bold">
        Modern <span className="text-red-600">Solutions</span> for <span className="text-red-600">Digital Risk</span>
      </h1>
      <p className="text-lg md:text-xl mt-2 text-slate-500 font-sans tracking-wide font-thin">Sustainable solutions for complex problems</p>
      <Link href="/services" className="mt-2 text-red-600 flex items-center text-base md:text-lg font-sans" aria-label="See Our Services">
        <span className="mr-4"><MoveRight size={ 32 } strokeWidth={ 1 } aria-hidden="true"/></span> See Our Services
      </Link>
    </div>
  )
}