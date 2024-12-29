import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  useEffect(() => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop = 0;
    }
  }, [location]);


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