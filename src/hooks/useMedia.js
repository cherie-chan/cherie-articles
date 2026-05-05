import { useState, useEffect } from 'react'
import { MEDIA_QUERIES } from '../constants/breakpoints'

export const useMedia = (query) => {
  // If query is a shorthand (L, M, S), map it to the full media query
  const mediaQuery = MEDIA_QUERIES[query] || query

  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)
    setMatches(media.matches)

    const handleMediaChange = (e) => {
      setMatches(e.matches)
    }

    media.addEventListener('change', handleMediaChange)
    return () => media.removeEventListener('change', handleMediaChange)
  }, [mediaQuery])

  return matches
}
