// useHistoryWithStorage.js

import { useEffect, useState } from 'react'

export const useHistoryWithStorage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  useEffect(() => {
    const storedIndex = localStorage.getItem('activeButtonIndex')
    if (storedIndex !== null) {
      setActiveButtonIndex(Number(storedIndex))
    }
  }, [])

  const storeActiveButtonIndex = (index) => {
    setActiveButtonIndex(index)
    localStorage.setItem('activeButtonIndex', String(index))
  }

  return {
    activeButtonIndex,
    storeActiveButtonIndex,
  }
}
