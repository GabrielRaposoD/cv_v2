export function Header() {
  return (
    <div className="fixed w-full border-b border-gray-900 border-opacity-75">
      <div className="bg-gradient-to-l from-primary-500 to-primary-900 h-1"></div>
      <div className="flex flex-row justify-between px-20 py-6 mx-auto bg-transparent">
        <div className="flex flex-row items-center">
          <img src="/images/fox.png" alt="" className="h-8 mr-2" />
          <img src="/images/logo.png" alt="" className="h-12" />
        </div>
        <div className="flex flex-row items-center space-x-4 text-gray-100">
          <button className="font-semibold">About</button>
          <button className="font-semibold">Portfolio</button>
          <button className="font-semibold">Services</button>
          <button className="font-semibold">Contact</button>
        </div>
      </div>
    </div>
  )
}
