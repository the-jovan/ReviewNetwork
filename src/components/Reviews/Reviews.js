import React from 'react'
import './../../scss/components/_navigation.scss'
import { Link, navigate } from '@reach/router'

const Reviews = ({ children }) => {
  return (
    <div>
      <div className='navigation__wrapper'>
        <nav className='navigation'>
          <Link className='navigation__link' to='trending'>All</Link>
          <Link className='navigation__link' to='restaurants'>Restaurants</Link>
          <Link className='navigation__link' to='hotels'>Hotels</Link>
          <form className='navigation__link'
            onSubmit={event => {
            event.preventDefault()
            const id = event.target.elements[0].value
            event.target.reset()
            navigate(`/reviews/search-results/${id}`)
            }}>
            <input type='text' placeholder='Search'/>
          </form>
        </nav>
      </div>
      <div className='navigation__child'>
        {children}
      </div>
    </div>
  )
}

export default Reviews