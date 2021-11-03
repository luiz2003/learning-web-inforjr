import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header/Header'
import Discover from './Components/Discover/Discover'
import Destination from './Components/Destination/Destination'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Discover />
    <Destination />
  </React.StrictMode>,
  document.getElementById('root')
)
