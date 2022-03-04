import React from 'react'
import System from './System'
import {SystemData} from './SystemData'

const SystemIndex = () => {
  return (
   <>
   <section className='system'>
        <div className='system-bar'></div>
            <div className='system-container container'>

            <div className='system-map'>
            {
       SystemData.map((item,index)=>(
        <System
            images={item.img}
            key={item.img}
        />
       )) 
       }
            </div>
       
       </div>
 </section>
       
   </>
  )
}

export default SystemIndex