import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <div className='contact-heading container'>
            <h1>Get in Touch</h1>
        </div>
        <div className='contact-items container'>
            <input type="text" name="" id="" placeholder='Enter Full Name' />
            <input type="email" name="" id="" placeholder='Enter a valid Email Address' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter your Message'></textarea>
            <button className='btn-contact'>Submit</button>
        </div>
    </section>
  )
}

export default Contact