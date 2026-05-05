import React, { useRef, useState, useEffect } from 'react'
import c from './quote-block.module.scss'
import useOnScreen from '../../../../hooks/useOnScreen'
import { usePresentationMode } from '../../../../contexts/PresentationContext'

const QuoteBlock = ({ quote, highlightWords = [], highlightColor = '#fff27bff', isTextInverted = false }) => {
  const quoteRef = useRef()
  const [forceVisible, setForceVisible] = useState(false)
  const isVisible = useOnScreen(quoteRef) || forceVisible
  const { isPresentationMode } = usePresentationMode()

  useEffect(() => {
    if (isPresentationMode) {
      const timer = setTimeout(() => {
        setForceVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPresentationMode])

  const renderHighlightedText = (text, highlightWords, highlightColor) => {
    if (!highlightWords.length) return text

    let result = text
    highlightWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi')
      result = result.replace(
        regex,
        `<mark style="background-color: ${highlightColor}; color: ${
          isTextInverted ? '#FFFFFF' : '#000000'
        }; padding: 0px 16px; border-radius: 16px;">${word}</mark>`
      )
    })
    return result
  }

  return (
    <div
      ref={quoteRef}
      className={`${c.quoteBlock} ${isVisible ? c.fadeIn : c.hidden} ${isPresentationMode ? c.presentationMode : ''}`}>
      <blockquote
        className={c.quote}
        style={{
          color: '#000000', // Keep base text always black
        }}
        dangerouslySetInnerHTML={{
          __html: renderHighlightedText(quote, highlightWords, highlightColor),
        }}
      />
    </div>
  )
}

export default QuoteBlock
