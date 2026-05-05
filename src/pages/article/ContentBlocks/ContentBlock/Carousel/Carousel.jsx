import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import c from './carousel.module.scss'

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const newIndex = (currentIndex - 1 + items.length) % items.length
    setCurrentIndex(newIndex)

    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const newIndex = (currentIndex + 1) % items.length
    setCurrentIndex(newIndex)

    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Prevent slide advancement when interacting with carousel
  const handleCarouselClick = (e) => {
    e.stopPropagation()
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }

    setIsDragging(false)
  }

  // Mouse handlers for desktop dragging
  const onMouseDown = (e) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    setTouchEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd || isTransitioning || !isDragging) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }

    setIsDragging(false)
  }

  // Cleanup mouse events
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        onMouseUp()
      }
    }

    const handleMouseMove = (e) => {
      if (isDragging) {
        onMouseMove(e)
      }
    }

    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
    // eslint-disable-next-line
  }, [isDragging, touchStart, touchEnd, isTransitioning])

  if (!items || items.length === 0) return null

  const getTrackTransform = () => {
    return `translateX(-${currentIndex * 100}%)`
  }

  return (
    <div className={c.carousel} onClick={handleCarouselClick}>
      <div className={c.carouselContainer}>
        <div
          ref={trackRef}
          className={c.carouselTrack}
          style={{
            transform: getTrackTransform(),
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}>
          {items.map((item, index) => (
            <div key={index} className={`${c.carouselItem} ${index === currentIndex ? c.activeItem : ''}`}>
              {item.image && (
                <div className={c.imageContainer}>
                  <img
                    src={item.image.src}
                    alt={item.image.description || ''}
                    className={`${c.carouselImage} ${item.image.noBorder ? c.noBorder : ''} ${
                      item.image.noBorderRadius ? c.noBorderRadius : ''
                    }`}
                  />
                  {item.image.description && <p className={c.imageDescription}>{item.image.description}</p>}
                </div>
              )}

              {item.title && !item.image && index === currentIndex && (
                <div className={c.textContainer}>
                  <h4 className={c.itemTitle}>{item.title}</h4>
                  <p className={c.itemText}>{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <button
              className={c.prevButton}
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Previous item"
              disabled={isTransitioning}>
              <ChevronLeft size={24} />
            </button>
            <button
              className={c.nextButton}
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Next item"
              disabled={isTransitioning}>
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className={c.indicators}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${c.indicator} ${index === currentIndex ? c.active : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                goToSlide(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
