import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div>
        <div className='w-24'>
          <Link to="/">
            <img src="/images/cheaperr-logo.png" alt="site logo" className='w-full relative top-3 left-3'/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header