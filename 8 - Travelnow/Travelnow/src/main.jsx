import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header/Header'
import Discover from './Components/Discover/Discover'
import Destination from './Components/Destination/Destination'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Discover />
    <Destination />
    <AboutUs />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)
