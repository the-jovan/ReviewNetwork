import React from 'react'
import './../../scss/components/header/_header.scss'
import { Link } from '@reach/router'

import logo from './../../images/nav-logo.webp'

const Header = () => {
  return (
    <header className='header__wrapper'>
      <div className='header'>
        <Link to='/'><img className='header__logo' src={logo} alt='Review Network Logo'/></Link>
        <nav className='header__navigation'>
          <Link className='header__navigation__link' to='/reviews'>Reviews</Link>
          <Link className='header__navigation__link' to='/login'>Login</Link>
          <Link className='header__navigation__link' to='/register'>Register</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header