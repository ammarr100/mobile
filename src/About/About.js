import React from 'react'
import './About.css'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const About = () => {
  return (
    <>
        <section className='about'>
        <div className='about-heading container'>
        <h1>About us</h1>
        </div>
        <div className='about-container container'>
            <div className='about-left'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, nesciunt molestiae accusantium debitis exercitationem magnam in deserunt sunt voluptatem dolores hic accusamus consectetur molestias laboriosam, atque quae repudiandae explicabo voluptas.</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus assumenda quae nemo numquam deserunt perferendis voluptas, doloremque cum maiores veritatis. Veritatis similique corporis asperiores labore sint voluptatem, quaerat fugiat.</p>
            </div>
            <div className='about-right'>
            <div className='so-icons'>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            </div>
            
            </div>
        </div>

        </section>
    </>
  )
}

export default About