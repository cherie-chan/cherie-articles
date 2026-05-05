import React, { useRef, lazy, Suspense, useEffect, useState } from 'react'
import * as LucideIcons from 'lucide-react'
import c from './content-block.module.scss'
import useOnScreen from '../../../../hooks/useOnScreen'
import VideoBlock from '../VideoBlock/VideoBlock'
import { usePresentationMode } from '../../../../contexts/PresentationContext'
import Carousel from './Carousel/Carousel'

const ContentBlock = ({ label, title, content, image, video, columns, items, display = 'grid', customComponent }) => {
  const { isPresentationMode } = usePresentationMode()
  const blockRef = useRef()
  const [forceVisible, setForceVisible] = useState(false)
  const isVisible = useOnScreen(blockRef) || forceVisible

  // Force animations in presentation mode
  useEffect(() => {
    if (isPresentationMode) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setForceVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPresentationMode])

  // Lazy load custom component if provided
  const LazyCustomComponent = customComponent
    ? lazy(() => {
        const componentPath = customComponent.replace(/^src\//, '').replace(/\.jsx$/, '')
        return import(`../../../../${componentPath}`)
      })
    : null

  const getGridStyle = () => {
    if (!columns) {
      // Default behavior if no columns specified
      return { gridTemplateColumns: 'repeat(3, 1fr)' }
    }

    return {
      '--grid-cols-l': columns.l || 3,
      '--grid-cols-md': columns.md || 2,
      '--grid-cols-s': columns.s || 1,
    }
  }

  // Helper function to render Lucide icons dynamically
  const renderIcon = (iconName, className = '') => {
    if (!iconName) return null

    const IconComponent = LucideIcons[iconName]
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in Lucide React`)
      return null
    }

    return <IconComponent className={className} />
  }

  // Function to render content with line breaks
  const renderContent = (text) => {
    if (!text) return null

    // Split by double newlines to create paragraphs
    const paragraphs = text.split('\n\n')

    return paragraphs.map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }} />
    ))
  }

  const renderGridItem = (item, idx) => (
    <div
      key={idx}
      className={`${c.gridItem} ${isVisible ? c.gridItemVisible : c.gridItemHidden}`}
      style={{
        animationDelay: isVisible ? `${idx * 0.2}s` : '0s',
        animationName: isVisible ? 'slideInStagger' : 'none',
      }}>
      {item.title && item.text && (
        <div className={c.itemContainer}>
          {item.icon && <div className={c.iconContainer}>{renderIcon(item.icon, c.itemIcon)}</div>}
          <h3>{item.title}</h3> <p>{item.text}</p>
        </div>
      )}
      {item.image && (
        <div className={c.imageContainer}>
          <img
            src={item.image.src}
            alt={item.image.title || 'Content image'}
            className={`${c.image} ${item.image.noBorder ? c.noBorder : ''} ${
              item.image.noBorderRadius ? c.noBorderRadius : ''
            }`}
          />
          {item.image.description && <p className={c.imageDescription}>{item.image.description}</p>}
        </div>
      )}
    </div>
  )

  return (
    <div
      className={`${c.block} ${isVisible ? c.fadeIn : c.hidden} ${isPresentationMode ? c.presentationMode : ''}`}
      ref={blockRef}>
      <div>
        {label && <div className={c.label}>{label}</div>}
        {title && <h2 className={c.title}>{title}</h2>}
      </div>
      {content && <div className={c.content}>{renderContent(content)}</div>}
      {image && (
        <div className={c.imageContainer}>
          <img
            src={image.src}
            alt={image.description}
            className={`${c.image} ${image.noBorder ? c.noBorder : ''} ${image.noBorderRadius ? c.noBorderRadius : ''}`}
          />
          {image.description && <p className={c.imageDescription}>{image.description}</p>}
        </div>
      )}

      {video && (
        <div className={c.videoContainer}>
          <VideoBlock source={video.source} description={video.description} />
        </div>
      )}

      {customComponent && LazyCustomComponent && (
        <div className={c.customComponentContainer}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCustomComponent />
          </Suspense>
        </div>
      )}
      {items?.length > 0 && display === 'grid' && (
        <div className={c.grid} style={getGridStyle()}>
          {items.map((item, idx) => {
            return renderGridItem(item, idx)
          })}
        </div>
      )}
      {items && display === 'carousel' && <Carousel items={items} />}
    </div>
  )
}

export default ContentBlock
