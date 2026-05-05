import React, { useRef, useState, useEffect } from 'react'
import c from './animated-bar-chart.module.scss'
import useOnScreen from '../../../../hooks/useOnScreen'

const AnimatedBarChart = () => {
  const chartRef = useRef()
  const isVisible = useOnScreen(chartRef, 0.3)
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const steps = [
      { step: 1, delay: 500 }, // Show UX line and start growing bar simultaneously
    ]

    let timeoutIds = []

    steps.forEach(({ step, delay }) => {
      const timeoutId = setTimeout(() => {
        setAnimationStep(step)
      }, delay)
      timeoutIds.push(timeoutId)
    })

    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [isVisible])

  return (
    <div ref={chartRef} className={c.chartContainer}>
      <div className={c.chart}>
        {/* Combined Y-axis label and horizontal line */}
        <div
          className={c.yAxisLine}
          style={{
            bottom: animationStep >= 1 ? '227px' : '28px',
          }}>
          <span
            className={c.yAxisLabel}
            style={{
              opacity: animationStep >= 1 ? 1 : 0,
            }}>
            User Experience
          </span>
          <div className={c.horizontalLine}></div>
        </div>

        {/* Base line */}
        <div className={c.baseLine} />

        {/* Universities bar (always visible) */}
        <div className={c.barContainer}>
          <div className={`${c.bar} ${c.universitiesBar}`} />
          <div className={c.barLabel}>Universities</div>
        </div>

        {/* World Class Products bar */}
        <div className={`${c.barContainer} ${c.worldClassContainer}`}>
          <div
            className={`${c.bar} ${c.worldClassBar}`}
            style={{
              height: animationStep >= 1 ? '200px' : '0px',
            }}
          />
          <div className={c.barLabel}>World Class Products</div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBarChart
