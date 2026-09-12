import type { Technology } from '../types/technology'

interface YourStackProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length

  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-sm text-gray-400">
        {count > 0 ? `${count} Technology Selected` : 'No technologies selected yet.'}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 py-10 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2.5"
            >
              <img src={tech.icon} alt={`${tech.name} logo`} className="h-8 w-8 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">{tech.name}</p>
                <p className="truncate text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${tech.name} from stack`}
                onClick={() => onRemove(tech.id)}
                className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
