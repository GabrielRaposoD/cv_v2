interface PortfolioItemProps {
  title: string
  desc: string
  languages: string
  framework: string
  date: string
  desksrc: string
  mobsrc: string
  uri: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  desc,
  languages,
  framework,
  date,
  desksrc,
  mobsrc,
  uri,
}: PortfolioItemProps) => {
  return (
    <div className="flex flex-col justify-center px-5 py-6 mx-2 bg-gray-700 bg-opacity-25 rounded-sm">
      <div className=" md:flex-row flex flex-col justify-between">
        <div className="w-auto">
          <h3
            className="text-primary-500 border-primary-500 mb-5 text-4xl font-bold border-b-4 border-r-2 border-opacity-50 border-solid rounded-b-full rounded-r-full"
            style={{ width: 'max-content' }}
          >
            <a href={uri} target="_blank">
              {title}
            </a>
          </h3>
        </div>

        <div className=" flex flex-row items-center justify-between mb-8">
          <div className="md:space-x-12 flex flex-row items-center justify-center space-x-6">
            <div className="md:text-center flex flex-col justify-center">
              <label className="wrap mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
                Language
              </label>
              <p className="font-bold text-gray-200">{languages}</p>
            </div>
            <div className="md:text-center flex flex-col justify-center">
              <label className="mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
                Design Framework
              </label>
              <p className="font-bold text-gray-200">{framework}</p>
            </div>
            <div className="md:text-center md:flex flex-col justify-center hidden">
              <label className="mb-2 text-xs font-thin tracking-wider text-gray-300 opacity-75">
                Developed at
              </label>
              <p className="font-bold text-gray-200">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pl-1 mb-6 text-gray-300 opacity-75">{desc}</p>
      <div>
        <img src={mobsrc} alt="" className="mobile" />
        <img src={desksrc} alt="" className="desktop" />
      </div>
    </div>
  )
}

export default PortfolioItem
