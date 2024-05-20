import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import WhatweDo from '../Components/WhatweDo'
import AboutUs from '../Components/AboutUs'

function User() {
  return (
    <div style={{ backgroundColor: '#0a192f' }}>
      <Header />
      <Banner />
      <AboutUs />
      <WhatweDo />
      <Footer />
    </div>
  )
}

export default User