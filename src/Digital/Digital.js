import React from 'react'
import './Digital.css'
import digitalImage from '../Digital/01.jpg'
const Digital = () => {
  return (
   <>
       <section className='digital'>
            <div className='digital-container container'>
                <div className='digital-text'>
                    <h1>We Build Digital Products</h1>
                    <p>Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis</p>
                    <button className='btn-digital'>Read More</button>
                </div>
                <div className='digital-image'>
                    <img src={digitalImage} alt="" />
                </div>
            </div>
       </section>
   </>
  )
}

export default Digital