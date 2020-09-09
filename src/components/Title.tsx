export function Title({ subtitle, title }) {
  return (
    <div className="flex flex-col items-center w-full mb-24 space-y-1">
      <p className="text-sm font-medium text-gray-500 opacity-75">{subtitle}</p>
      <h3 className="text-5xl font-semibold text-gray-200">{title}</h3>
      <div
        className="border-primary-500 border-2 border-solid"
        style={{ width: 120 }}
      ></div>
    </div>
  )
}
