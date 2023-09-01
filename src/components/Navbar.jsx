import logo from '../images/logo.png'
import { pageLinks, socialLinks } from '../data'
import { useState } from 'react'

function navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='mac-mitts' />
          <div className='navbar-ham'>
            <button
              type='button'
              className='toggle'
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              {navbarOpen ? (
                <i className='fa-solid fa-xmark'></i>
              ) : (
                <i className='fas fa-bars'></i>
              )}
            </button>
          </div>
          <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            {pageLinks.map((links) => {
              return (
                <li key={links.id}>
                  <a
                    href={links.href}
                    className='nav-link'
                    onClick={() => setNavbarOpen((prev) => !prev)}
                  >
                    {' '}
                    {links.text}{' '}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((links) => {
            return (
              <li key={links.id}>
                <a href={links.href} className='nav-link'>
                  {' '}
                  {links.text}{' '}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

function handleClick() {
  // $('#navLinks').toggleClass('active')
  return (
    <ul className='ham-links' id='ham-links'>
      {pageLinks.map((links) => {
        return (
          <li key={links.id}>
            <a href={links.href} className='ham-link'>
              {' '}
              {links.text}{' '}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default navbar
