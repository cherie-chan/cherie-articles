import React from 'react'
import c from './slides-wrapper.module.scss'
import ContentBlock from '../../../pages/article/ContentBlocks/ContentBlock/ContentBlock'
import QuoteBlock from '../../../pages/article/ContentBlocks/QuoteBlock/QuoteBlock'
import VideoBlock from '../../../pages/article/ContentBlocks/VideoBlock/VideoBlock'
import CustomBlock from '../../../pages/article/ContentBlocks/CustomBlock/CustomBlock'

const SlidesWrapper = ({ slides, currentSlide, isFullscreen, onNextSlide }) => {
  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'contentBlock':
        return <ContentBlock {...slide} isPresentationMode={true} key={currentSlide} />
      case 'quote':
        return <QuoteBlock {...slide} isPresentationMode={true} key={currentSlide} />
      case 'video':
        return <VideoBlock {...slide} key={currentSlide} />
      case 'custom':
        return <CustomBlock {...slide} key={currentSlide} />
      default:
        return null
    }
  }

  const renderThankYouSlide = () => (
    <div className={c.thankYouSlide}>
      <h1>Thank you</h1>
    </div>
  )

  const getCurrentSlideContent = () => {
    if (currentSlide === slides.length) {
      return renderThankYouSlide()
    }
    return renderSlideContent(slides[currentSlide])
  }

  const handleSlideClick = (e) => {
    // Don't advance slide if clicking on interactive elements
    const clickedElement = e.target
    const interactiveSelectors = [
      'button',
      'a',
      'video',
      'iframe',
      '.carousel', // Carousel container
      '[role="button"]',
      'input',
      'select',
      'textarea',
    ]

    // Check if the clicked element or any parent is interactive
    const isInteractive = interactiveSelectors.some((selector) => {
      if (selector.startsWith('.')) {
        // Class selector
        const className = selector.slice(1)
        return clickedElement.closest(`.${className}`)
      } else {
        // Tag or attribute selector
        return clickedElement.closest(selector)
      }
    })

    // Only advance slide if not clicking on interactive elements
    if (!isInteractive && onNextSlide) {
      onNextSlide()
    }
  }

  return (
    <div className={c.slidesContainer}>
      <div className={c.slide} onClick={handleSlideClick}>
        <div className={`${c.slideContent} ${isFullscreen ? c.fullscreenScale : ''}`}>{getCurrentSlideContent()}</div>
      </div>
    </div>
  )
}

export default SlidesWrapper
