import React from 'react'
import c from './video-block.module.scss'
import { usePresentationMode } from '../../../../contexts/PresentationContext'

const VideoBlock = ({ source, description }) => {
  const isYouTube = source.includes('youtube.com') || source.includes('youtu.be')
  const { isPresentationMode } = usePresentationMode()

  // Add parameters to disable recommendations but keep fullscreen working
  const getCleanYouTubeUrl = (url) => {
    const params = new URLSearchParams()
    params.set('rel', '0') // Don't show related videos
    params.set('modestbranding', '1') // Minimal YouTube branding
    params.set('controls', '1') // Show controls
    params.set('fs', '1') // Allow fullscreen
    // Remove problematic parameters that might interfere with fullscreen
    // params.set('showinfo', '0') - This is deprecated and can cause issues
    // params.set('iv_load_policy', '3') - Keep annotations default
    // params.set('cc_load_policy', '0') - Keep captions default

    return `${url}?${params.toString()}`
  }

  const handleVideoClick = (e) => {
    // Prevent slide advancement when clicking on video
    e.stopPropagation()
  }

  return (
    <div className={c.videoBlock}>
      <div className={c.videoContainer}>
        {isYouTube ? (
          <iframe
            src={getCleanYouTubeUrl(source)}
            className={`${c.video} ${isPresentationMode ? c.presentationMode : ''}`}
            title={description || 'Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            onClick={handleVideoClick}
          />
        ) : (
          <video
            src={source}
            controls
            className={`${c.video} ${isPresentationMode ? c.presentationMode : ''}`}
            onClick={handleVideoClick}
          />
        )}
      </div>
      {description && <p className={c.description}>{description}</p>}
    </div>
  )
}

export default VideoBlock
