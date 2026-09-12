import banner from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-gray-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex gap-3 sm:gap-4">
            <a
              href="#technologies"
              className="brand-gradient-bg flex-1 rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:flex-none"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 sm:flex-none"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Isometric illustration of a layered development stack"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
