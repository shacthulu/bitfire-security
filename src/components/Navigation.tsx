'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { useState } from 'react'
import { Menu} from 'lucide-react'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export function Navigation() {
    const pathname = usePathname()
    const [ isOpen, setIsOpen ] = useState( false )

    return (
        <nav className="relative">
            <button
                className="sm:hidden"
                onClick={ () => setIsOpen( !isOpen ) }
                aria-label="Toggle navigation menu"
            >
                <Menu size={ 24 } />
            </button>
            <div className={ cn(
                "sm:flex sm:space-x-6 text-sm",
                isOpen
                    ? "absolute top-10 right-0 bg-white p-4 shadow-md z-0"
                    : "hidden"
            ) }>
                { navItems.map( ( item ) => (
                    <Link
                        key={ item.href }
                        href={ item.href }
                        className={ cn(
                            "block sm:inline-block transition-colors hover:text-red-500  z-0",
                            pathname === item.href
                                ? "text-red-500"
                                : "text-gray-400"
                        ) }
                        onClick={ () => setIsOpen( false ) }
                    >
                        { item.label }
                    </Link>
                ) ) }
            </div>
        </nav>
    )
}