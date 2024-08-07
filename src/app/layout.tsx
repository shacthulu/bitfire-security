import { Linkedin, Mail } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import '@/styles/globals.css'
import { Inter, Roboto, Open_Sans, Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'

const libreBaskerville = Libre_Baskerville( {
  weight: [ '400', '700' ],
  subsets: [ 'latin' ],
  variable: '--font-libre-baskerville',
} )

const inter = Inter( {
  subsets: [ 'latin' ],
  variable: '--font-inter',
} )

const roboto = Roboto( {
  weight: [ '300', '400', '500', '700' ],
  subsets: [ 'latin' ],
  variable: '--font-roboto',
} )

const openSans = Open_Sans( {
  subsets: [ 'latin' ],
  variable: '--font-open-sans',
} )

export const metadata = {
  title: 'Bitfire Security',
  description: 'Modern Solutions for Digital Risk',
}

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html lang="en" className={ `${ libreBaskerville.variable } ${ inter.variable } ${ roboto.variable } ${ openSans.variable}` }>
      <body className="min-h-screen flex flex-col bg-white font-open-sans">
        <div className="flex-grow flex justify-center px-4 sm:mx-20">
          <div className="w-full max-w-[57rem] flex flex-col relative">
            {/* Background with 5 vertical lines confined to content width */ }
            <div className="absolute inset-0 grid grid-cols-4 gap-0 h-max">
              { [ ...Array( 5 ) ].map( ( _, i ) => (
                <div key={ i } className="w-px bg-gray-100 h-max"></div>
              ) ) }
            </div>

            <header className="flex justify-between items-center py-8 relative z-10">
              <div className="w-10 h-10 sm:w-36 sm:h-14 relative">
                <Image
                  src="/images/bitfire-logo.svg"
                  alt="Bitfire Security Logo"
                  fill
                  style={ { objectFit: 'contain' } }
                  priority
                  className="hidden sm:block"
                />
                <Image
                  src="/images/bitfire-b-logo.svg"
                  alt="Bitfire Security B Logo"
                  fill
                  style={ { objectFit: 'contain' } }
                  priority
                  className="sm:hidden"
                />
              </div>
              <Navigation />
            </header>

            <main className="flex-grow flex flex-col relative z-10 py-8 sm:py-0">
              { children }
            </main>

            <footer className="py-4 md:text-gray-400 text-sm relative z-10 text-center text-white">
              © { new Date().getFullYear() } by Bitfire Security
            </footer>
          </div>
        </div>

        {/* Red bar with icons */ }
        <div className="z-50 fixed sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto bottom-0 left-0 right-0 w-full sm:w-16 bg-red-500 flex sm:flex-col justify-between items-center py-2 sm:py-8">
          <div className="text-white text-2xl font-bold ml-4 md:ml-0"><Linkedin size={ 28 } strokeWidth={ 0 } fill='white' /></div>
          <a href="#" className="text-white hover:text-gray-200 mr-4 md:mr-0">
            <Mail size={ 28 } />
          </a>
        </div>

        <TailwindIndicator />
      </body>
    </html>
  )
}