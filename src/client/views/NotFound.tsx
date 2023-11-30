import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-grid gap-2 col-6 mx-auto'>
      <h2 className="text-center display-1 text-light">Page Not Found</h2>
      <Link className='home-button' to='/'>Return Home</Link>

    </div>
  )
}

export default NotFound
