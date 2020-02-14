import React from 'react'
import './../../scss/components/_navigation.scss'
import { Link } from '@reach/router'

const Reviews = ({ children }) => {
  return (
    <div>
      <div className='navigation__wrapper'>
        <nav className='navigation'>
          <Link className='navigation__link' to='/reviews'>All</Link>
          <Link className='navigation__link' to='restaurants'>Restaurants</Link>
          <Link className='navigation__link' to='hotels'>Hotels</Link>
        </nav>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Reviews