import type { Technology } from '../types/technology'
import { CATEGORY_BADGE_STYLES } from '../data/categoryStyles'

interface TechnologyCardProps {
  technology: Technology
  isAdded: boolean
  onAdd: (technology: Technology) => void
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = technology

  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-9 w-9 object-contain" loading="lazy" />
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${CATEGORY_BADGE_STYLES[category]}`}>
          {badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-500">{description}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-600">{category}</span>
        <span>{difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-400">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
