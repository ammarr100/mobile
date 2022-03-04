import React from 'react'
import loveImage from '../Love/01.jpg'
import loveImage02 from '../Love/02.jpg'
import './Love.css'

const Love = () => {
  return (
    <>
        <section className='love'>
            <div className='love-container container'>
                <div className='love-image01'>
                <img src={loveImage02} alt="" />
                </div>
            <div className='love-items'>
                <div className='love-text02'>
                    <h1>Start Running Today</h1>
                    <button className='btn-love'>Download Now</button>
                    <p>Free 30 Days Trial, Mac 0s 10.11+</p>
                </div>
                <div className='love-image'>
                <img src={loveImage} alt="" />

                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Love