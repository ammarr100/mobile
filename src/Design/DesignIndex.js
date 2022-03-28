import React, { useState } from 'react'
import Design from './Design'
import {DesignApi} from './DesignApi'

const DesignIndex = () => {

    const [data, setData] = useState(DesignApi)
  return (
      <>
      <section className='design'>
            <div className='design-heading container'>
                <h1>Design Strategy</h1>
                <p>Using design to improve product development</p>
            </div>
            <div className='design-container container'>
    {
        data.map((items)=>(
            
            <Design
                key={items.id}
                designIcons={items.designIcons}
                heading={items.heading}
                designText={items.designText}
                More={items.More}
            />
        ))
    }
        
    </div>
        </section>
    </>
  )
}

export default DesignIndex