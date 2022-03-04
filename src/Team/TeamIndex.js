import React, { useState } from 'react'
import Team from './Team'
import { TeamApi } from './TeamApi'
const TeamIndex = () => {

const [data, setData] = useState(TeamApi)
  return (
    <>
    <section className='team'>
            <div className='team-heading container'>
                <h1>Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam eligendi, deleniti laudantium exercitationem minima eos placeat consequuntur rerum a?</p>
            </div>
            <div className='team-container container'>
        {
            data.map((items,index)=>(
                <Team
                tempImage={items.tempImage}
                title={items.title}
                position={items.position}
                facebook={items.facebook}
                twitter={items.twitter}
                instagram={items.instagram}
                key={items.title + index}
                />
            ))
        }
        </div>
        </section>
    </>
  )
}

export default TeamIndex