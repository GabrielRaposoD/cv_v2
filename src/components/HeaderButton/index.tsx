import { usePage } from '@context/pageContext'

interface HeaderButtonProps {
  page: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  page,
}: HeaderButtonProps) => {
  const { setPage } = usePage()

  return (
    <button
      onClick={() => setPage(page)}
      className="linker md:py-0 py-6 font-semibold"
    >
      {page}
    </button>
  )
}

export default HeaderButton
