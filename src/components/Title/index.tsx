interface TitleProps {
  subtitle: string
  title: string
}

const Title: React.FC<TitleProps> = ({ subtitle, title }: TitleProps) => {
  return (
    <div className="flex flex-col items-center w-full mb-16">
      <p className="text-sm font-medium text-gray-500 opacity-75">{subtitle}</p>
      <h3 className="mt-1 text-5xl font-semibold text-gray-200">{title}</h3>
      <div
        className="border-primary-500 mt-4 border-2 border-solid"
        style={{ width: 120 }}
      />
    </div>
  )
}

export default Title
