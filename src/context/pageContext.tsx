import React, { useState, createContext } from 'react'

const PageContext = createContext(null)

export function PageProvider(props) {
  const [page, setPage] = useState('hero')

  return (
    <PageContext.Provider
      value={{
        page,
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
