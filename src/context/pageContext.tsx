import React, { useState, createContext } from 'react'

const PageContext = createContext(null)

export function PageProvider(props) {
  const pages: string[] = ['About', 'Services', 'Portfolio', 'Contact']
  const [page, setPage] = useState<string>('Hero')

  return (
    <PageContext.Provider
      value={{
        page,
        pages,
        setPage,
      }}
      {...props}
    />
  )
}

export function usePage() {
  const context = React.useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider')
  }
  return context
}
