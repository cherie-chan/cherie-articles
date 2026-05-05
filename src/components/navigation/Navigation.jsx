import React from 'react'
import { Link } from 'react-router-dom'
import c from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <div className={c.container}>
        <Link to="/" className={c.logo}>
          Cherie
        </Link>
        <Link to="/about" className={c.aboutLink}>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
