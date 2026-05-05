import { lazy, Suspense } from 'react'
import c from './custom-block.module.scss'

// Vite requires static glob patterns for dynamic imports
const customComponents = import.meta.glob('../../CustomComponents/**/*.jsx')

const CustomBlock = ({ component }) => {
  const key = component.replace(/^src\/pages\/article\//, '../../').replace(/\.jsx$/, '') + '.jsx'
  const loader = customComponents[key]

  if (!loader) return null

  const LazyComponent = lazy(loader)

  return (
    <div className={c.customBlock}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default CustomBlock
