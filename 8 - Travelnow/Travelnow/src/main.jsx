import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header/Header'
import Discover from './Components/Discover/Discover'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Discover />
  </React.StrictMode>,
  document.getElementById('root')
)
