import React from 'react'
import './Design.css'

const Design = ({designIcons,heading,designText,More}) => {
  return (
    <>
        
            <div className='design-items'>
            <i class = {`dIcons ${designIcons}`}></i>
                <h1>{heading}</h1>
                <p>{designText}</p>
                <button className='btn-design'>{More}</button>
            </div>
            
    </>
  )
}

export default Design