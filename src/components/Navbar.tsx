import { useState } from 'react'
import logo from '../assets/logo-text.png'
import hamburgerIcon from '../assets/hamburger.png'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">

      <nav className="relative mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left: hamburger (mobile) + brand logo (desktop) */}
        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center sm:left-6 lg:left-8">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg p-1.5 transition hover:shadow-md md:hidden"
          >
            <img src={hamburgerIcon} alt="" className="h-6 w-6" />
          </button>
          <img src={logo} alt="Dev Stack" className="hidden h-8 w-auto md:block" />
        </div>


        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={logo} alt="Dev Stack" className="h-7 w-auto md:hidden" />
          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={i === 0 ? 'text-pink-600' : 'transition hover:text-gray-900'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:right-6 sm:gap-4 lg:right-8">
          <button type="button" className="hidden text-sm font-medium text-gray-700 hover:text-gray-900 sm:inline-block">
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </nav>


      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={i === 0 ? 'text-pink-600' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
