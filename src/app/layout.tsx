import { Linkedin, Mail } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import '@/styles/globals.css'
import { Roboto, Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'

const libreBaskerville = Libre_Baskerville( {
  weight: [ '400', '700' ],
  subsets: [ 'latin' ],
  variable: '--font-libre-baskerville',
} )


const roboto = Roboto( {
  weight: [ '300', '400', '500', '700' ],
  subsets: [ 'latin' ],
  variable: '--font-roboto',
} )


export const metadata = {
  title: 'Bitfire Security',
  description: 'Modern Solutions for Digital Risk',
  icons: {
    icon: "/favicon.png",
  }
}

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html lang="en" className={ `${ libreBaskerville.variable } ${ roboto.variable } ` }>
      <body className="min-h-screen flex flex-col bg-white font-open-sans">
        <div className="flex-grow flex justify-center px-4 sm:mx-20">
          <div className="w-full max-w-[57rem] flex flex-col relative">
            {/* Background with 5 vertical lines confined to content width. Temporarily disabled. 
            <div className="absolute inset-0 grid grid-cols-4 gap-0 h-max">
              { [ ...Array( 5 ) ].map( ( _, i ) => (
                <div key={ i } className="w-px bg-gray-100 h-max"></div>
              ) ) }
            </div>
            */ }

            <header className="flex justify-between items-center py-8 relative z-20" role="banner">
              <div className="w-10 h-10 sm:w-36 sm:h-14 relative">
                <Image
                  src="/images/bitfire-logo-144-56.svg"
                  alt="Bitfire Security Logo"
                  fill
                  style={ { objectFit: 'contain' } }
                  priority
                  className="hidden sm:block"
                />
                <Image
                  src="/images/bitfire-b-logo-69-50.svg"
                  alt="Bitfire Security B Logo"
                  fill
                  style={ { objectFit: 'contain' } }
                  priority
                  className="sm:hidden"
                />
              </div>
              <Navigation />
            </header>

            <main className="flex-grow flex flex-col relative z-10 py-8 sm:py-0" role="main">
              { children }
            </main>

            <footer className="py-4 text-gray-900 text-sm relative z-10 text-center" role="contentinfo">
              © { new Date().getFullYear() } by Bitfire Security
            </footer>
          </div>
        </div>

        {/* Red bar with icons */ }
        <div className="z-50 fixed sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto bottom-0 left-0 right-0 w-full sm:w-16 bg-red-500 flex sm:flex-col justify-between items-center py-2 sm:py-8" role="navigation" aria-label='Social media links'>
          <div className="text-white text-2xl font-bold ml-4 md:ml-0">
            <a href="https://www.linkedin.com/company/bitfiresecurity" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={ 28 } strokeWidth={ 0 } fill="white" />
            </a>
          </div>
          <a href="mailto:info@bitfiresecurity.com" className="text-white hover:text-gray-200 mr-4 md:mr-0" aria-label="Send us an email">
            <Mail size={ 28 } />
          </a>
        </div>
        <TailwindIndicator />
        <Analytics/>
      </body>
    </html>
  )
}