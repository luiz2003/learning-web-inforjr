import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header/Header'
import Discover from './Components/Discover/Discover'
import Destination from './Components/Destination/Destination'
import AboutUs from './Components/AboutUs/AboutUs'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Discover />
    <Destination />
    <AboutUs />
  </React.StrictMode>,
  document.getElementById('root')
)
