import { useState } from 'react'
import cs from 'classnames'
import HeaderButton from '@components/HeaderButton'
import { usePage } from '@context/pageContext'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { pages } = usePage()

  return (
    <div className="fixed z-10 w-full border-b border-gray-900 border-opacity-75">
      <div className="bg-gradient-to-l from-primary-500 to-primary-900 h-1" />
      <div className="md:flex-row md:w-auto md:px-20 md:py-6 flex flex-col justify-between w-full mx-auto bg-transparent">
        <div className="md:justify-start md:px-0 md:py-0 flex flex-row items-center justify-between px-6 py-6">
          {/* <img src="/images/fox.png" alt="" className="h-8 mr-4" /> */}
          <img src={require('@assets/logo.png')} alt="" className=" h-16" />
          <button className="md:hidden" onClick={() => setOpen(i => !i)}>
            {isOpen ? (
              <FaTimes className="md:hidden flex text-2xl text-white" />
            ) : (
              <FaBars className="md:hidden flex text-2xl text-white" />
            )}
          </button>
        </div>

        <div className="md:flex-row md:space-x-12 md:space-y-0 md:w-auto bg-color md:bg-transparent md:flex items-center hidden w-full space-y-6 text-gray-200">
          {pages.map(p => (
            <HeaderButton page={p} key={p} />
          ))}
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
          {pages.map(p => (
            <HeaderButton page={p} key={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
