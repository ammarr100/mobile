import React from 'react'
import './Header.css'
import headerImage from '../Header/01.jpg'
const Header = () => {
  return (
    <>
        <section className='header'>
            <div className='header-container'>
            <div className='header-text'>
              <h1>Mobile Application Development</h1>
              <button className='btn-header'>Learn More</button>
            </div>
            <div className='header-image'>
              <img src={headerImage} alt="" />
            </div>

            </div>
        </section>
    </>
  )
}

export default Header