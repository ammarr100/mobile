import React from 'react'
import './Team.css'

const Team = ({tempImage, title, position, facebook, twitter, instagram}) => {
  return (
    <>
        
                <div className='team-items'>
                <div className = 'team-image'>
                <img src={tempImage} alt="" />
                </div>
                    
                    <h1>{title}</h1>
                    <p>{position}</p>
                    <i class = {`social-colors ${facebook}`}></i>
                    <i class = {`social-colors ${twitter}`}></i>
                    <i class = {`social-colors ${instagram}`}></i>                   

                </div>
            
    </>
  )
}

export default Team