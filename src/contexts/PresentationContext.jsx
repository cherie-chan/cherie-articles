import React, { createContext, useContext, useState } from 'react'

const PresentationContext = createContext()

export const PresentationProvider = ({ children }) => {
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  const enterPresentationMode = () => setIsPresentationMode(true)
  const exitPresentationMode = () => setIsPresentationMode(false)

  return (
    <PresentationContext.Provider
      value={{
        isPresentationMode,
        enterPresentationMode,
        exitPresentationMode,
      }}>
      {children}
    </PresentationContext.Provider>
  )
}

export const usePresentationMode = () => {
  const context = useContext(PresentationContext)
  if (!context) {
    throw new Error('usePresentationMode must be used within a PresentationProvider')
  }
  return context
}
