import React from 'react'
import c from './my-custom-component.module.scss'

const MyCustomComponent = () => {
  return (
    <div className={c.customComponent}>
      <h3>Custom Component Example</h3>
      <p>This is a custom React component that can be dynamically loaded into articles.</p>
      <div className={c.demo}>
        <button>Interactive Element</button>
      </div>
    </div>
  )
}

export default MyCustomComponent
