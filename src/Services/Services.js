import React from 'react'
import './Services.css'

const Services = ({icon,heading,text}) => {
  return (
    <>
        
        
        <div className='services-items'>
              
                <i class={`${icon}`}></i>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        
    </>
  )
}

export default Services