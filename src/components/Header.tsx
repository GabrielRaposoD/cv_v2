import { useState } from 'react'
import cs from 'classnames'
import { usePage } from '../context/pageContext'

export function Header() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { setPage } = usePage()

  return (
    <div className="fixed z-10 w-full border-b border-gray-900 border-opacity-75">
      <div className="bg-gradient-to-l from-primary-500 to-primary-900 h-1"></div>
      <div className="md:flex-row md:w-auto md:px-20 md:py-6 flex flex-col justify-between w-full mx-auto bg-transparent">
        <div className="md:justify-start md:px-0 md:py-0 flex flex-row items-center justify-between px-6 py-6">
          {/* <img src="/images/fox.png" alt="" className="h-8 mr-4" /> */}
          <img src="/images/logo.png" alt="" className=" h-16" />
          <button className="md:hidden" onClick={() => setOpen(i => !i)}>
            <i
              className={cs('text-2xl text-white flex md:hidden', {
                'fa fa-bars': !isOpen,
                'fa fa-times': isOpen,
              })}
            />
          </button>
        </div>

        <div className="md:flex-row md:space-x-12 md:space-y-0 md:w-auto bg-color md:bg-transparent md:flex items-center hidden w-full space-y-6 text-gray-200">
          <button
            onClick={() => setPage('about')}
            className="linker md:py-0 py-6 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => setPage('portfolio')}
            className="linker md:py-0 py-6 font-semibold"
          >
            Portfolio
          </button>
          <button
            onClick={() => setPage('services')}
            className="linker md:py-0 py-6 font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => setPage('contact')}
            className="linker md:py-0 py-6 font-semibold"
          >
            Contact
          </button>
        </div>

        <div
          onClick={() => setOpen(false)}
          className={cs(
            'md:flex-row md:space-x-12 md:space-y-0 md:w-auto main-dropdown flex flex-col items-center w-full space-y-6 text-gray-200 bg-color md:bg-transparent overflow-hidden md:hidden',
            {
              'main-dropdown-open': isOpen,
            }
          )}
        >
          <button
            onClick={() => setPage('about')}
            className=" md:py-0 py-6 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => setPage('portfolio')}
            className=" md:py-0 py-6 font-semibold"
          >
            Portfolio
          </button>
          <button
            onClick={() => setPage('services')}
            className=" md:py-0 py-6 font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => setPage('contact')}
            className=" md:py-0 py-6 font-semibold"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
