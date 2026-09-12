import logo from '../assets/logo-text.png'

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mobile: just the brand block, centered */}
        <div className="flex flex-col items-center text-center sm:hidden">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building modern
            software.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm font-medium text-gray-500">
            {SOCIAL_LINKS.map((social, i) => (
              <span key={social.label} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">•</span>}
                <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-gray-800">
                  {social.label}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Tablet and up: brand block + link groups */}
        <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-500">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-800"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {group.title}
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
