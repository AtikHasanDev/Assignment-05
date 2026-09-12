import type { Category } from '../types/technology'

/**
 * Single place mapping each technology category to a badge color.
 * Keeps every card's accent badge visually consistent by category.
 */
export const CATEGORY_BADGE_STYLES: Record<Category, string> = {
  Frontend: 'bg-sky-100 text-sky-700',
  Backend: 'bg-emerald-100 text-emerald-700',
  Database: 'bg-rose-100 text-rose-700',
  Language: 'bg-amber-100 text-amber-700',
  Styling: 'bg-cyan-100 text-cyan-700',
  DevOps: 'bg-violet-100 text-violet-700',
  Tools: 'bg-slate-200 text-slate-700',
}
