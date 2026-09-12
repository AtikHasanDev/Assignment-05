export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-gray-500">
      <span className="loading loading-spinner loading-lg text-pink-500" />
      <p className="text-sm">Loading technologies...</p>
    </div>
  )
}
