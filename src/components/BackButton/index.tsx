import { usePage } from '@context/pageContext'
import { FaTimes } from 'react-icons/fa'

const BackButton: React.FC = () => {
  const { setPage } = usePage()
  return (
    <FaTimes
      onClick={() => setPage('Hero')}
      className="md:mt-10 md:mr-10 absolute right-0 mr-5 text-4xl text-white cursor-pointer"
    />
  )
}

export default BackButton
