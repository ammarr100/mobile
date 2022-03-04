import React from 'react'
import Services from './Services'
import { ServicesApi } from './ServicesApi'

const ServicesIndex = () => {
  return (
   <>
   <section className='services-wrapper'>

   
<section className='services-flex container'>


<section className='services01'>
            <div className='services-container container'>
                <div className='services-text'>
                    <h1>All Mobile Apps in One Place, right across your finger tip </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt delectus autem consequatur, ratione quia odit nemo amet dicta soluta doloribus.</p>
                    <button className='btn-services'>Learn More</button>
                </div>
            </div>
            </section>
       
   <section className='services02'>
        <div className='services-container02 container'>
       {
        ServicesApi.map((items, index)=>(
            <Services
             icon={items.icon}
             heading={items.heading}
             text={items.text}
            />
        )

        ) 
       }
       
       

       </div>
            
        </section>
</section>  
</section>     
   </>
  )
}

export default ServicesIndex