import type { Technology } from '../types/technology'
import TechnologyCard from './TechnologyCard'

interface TechnologyGridProps {
  technologies: Technology[]
  stackIds: Set<string>
  onAdd: (technology: Technology) => void
}

export default function TechnologyGrid({ technologies, stackIds, onAdd }: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={stackIds.has(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}
