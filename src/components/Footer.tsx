import logo from '../assets/logo-text.png'

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-500">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                LinkedIn
              </a>
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
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
