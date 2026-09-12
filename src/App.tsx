import { useEffect, useState } from 'react'

import type { Technology } from './types/technology'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyGrid from './components/TechnologyGrid'
import Loading from './components/Loading'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch the technology catalog from the local JSON file on mount.
  useEffect(() => {
    let isMounted = true

    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load technologies.')
        return response.json() as Promise<Technology[]>
      })
      .then((data) => {
        if (isMounted) setTechnologies(data)
      })
      .catch(() => {
        if (isMounted) setError('Could not load technology data. Please refresh the page.')
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const stackIds = new Set(stack.map((tech) => tech.id))

  const handleAdd = (technology: Technology) => {
    if (stackIds.has(technology.id)) return
    setStack((prev) => [...prev, technology])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="mt-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>
        </div>

        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="rounded-xl bg-rose-50 p-6 text-center text-sm font-medium text-rose-600">{error}</p>
        ) : (
          <TechnologyGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
        )}
      </section>
    </div>
  )
}

export default App
