export function Header() {
  return (
    <div className="fixed z-10 w-full border-b border-gray-900 border-opacity-75">
      <div className="bg-gradient-to-l from-primary-500 to-primary-900 h-1"></div>
      <div className="flex flex-row justify-between px-20 py-6 mx-auto bg-transparent">
        <div className="flex flex-row items-center">
          <img src="/images/fox.png" alt="" className="h-8 mr-4" />
          <img src="/images/logo.png" alt="" className="h-12 -mb-2" />
        </div>
        <div className="flex flex-row items-center space-x-12 text-gray-200">
          <button className="linker font-semibold">About</button>
          <button className="linker font-semibold">Portfolio</button>
          <button className="linker font-semibold">Services</button>
          <button className="linker font-semibold">Contact</button>
        </div>
      </div>
    </div>
  )
}
