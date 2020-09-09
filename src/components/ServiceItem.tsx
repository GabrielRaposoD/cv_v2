export function ServiceItem() {
  return (
    <div className="hover:border-primary-500 flex flex-col items-center px-4 py-6 text-center transition-all duration-500 ease-in-out bg-gray-700 bg-opacity-25 border-b-2 border-transparent">
      <img src="/images/fox.png" alt="" className="h-32 mb-10" />
      <h4 className="mb-4 text-2xl font-bold tracking-wider text-gray-200">
        Web Design
      </h4>
      <p className="leading-loose text-gray-300 opacity-75">
        Creating your website is more than a service, it's a pleasure. What
        unique experience can I developed for you today?
      </p>
    </div>
  )
}
