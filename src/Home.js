import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import DesignIndex from './Design/DesignIndex'
import Digital from './Digital/Digital'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Love from './Love/Love'
import Navbar from './Navbar/Navbar'
import ServicesIndex from './Services/ServicesIndex'
import Sub from './Sub/Sub'
import SystemIndex from './System/SystemIndex'
import TeamIndex from './Team/TeamIndex'

const Home = () => {
  return (
   <>
     <Navbar/>
     <Header/>
     <Love/>     
     <ServicesIndex/>     
     <Digital/>
     <SystemIndex/>
     <DesignIndex/>
     <TeamIndex/>
     <Sub/>
     <About/>     
     <Contact/>
     <Footer/>
   </>
  )
}

export default Home