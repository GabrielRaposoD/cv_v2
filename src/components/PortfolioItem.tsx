export function PortfolioItem({ title, desc, languages, framework, date }) {
  return (
    <div className="flex flex-col px-5 py-6 bg-gray-700 bg-opacity-25 rounded-sm">
      <h3 className="text-primary-500 border-solido border-primary-500 w-1/12 text-4xl font-bold border-b-4 border-r-2 border-opacity-50 rounded-b-full rounded-r-full">
        Elune
      </h3>
      <div className="flex flex-row items-center justify-between mb-8">
        <p className="text-gray-300 opacity-75">
          The Business Coming Soon Template.
        </p>
        <div className="flex flex-row space-x-12">
          <div className="flex flex-col justify-center text-center">
            <label className="mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
              Language
            </label>
            <p className="font-bold text-gray-200">Html / CSS</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <label className="mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
              Design Framework
            </label>
            <p className="font-bold text-gray-200">Tailwind</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <label className="mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
              Developed at
            </label>

            <p className="font-bold text-gray-200">2020</p>
          </div>
        </div>
      </div>
      <img src="/images/site1.png" alt="" />
    </div>
  )
}
