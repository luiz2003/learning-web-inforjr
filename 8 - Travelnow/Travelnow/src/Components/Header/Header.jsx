import { useState } from 'react'
import './style.css'



export default function Header() {
    const [hambOpen, setHambOpen] = useState(false)
    function toggle(){
        !hambOpen? document.getElementsByTagName('body')[0].classList.add('active') : document.getElementsByTagName('body')[0].classList.remove('active')
        setHambOpen(prev => !prev)
    }
    return (
      
        <div className="header">
            <header>
                <img src="images/logo.svg" alt="" />
                
                <nav >
                    <a href="">Discover</a>
                    <a href="">Destination</a>
                    <a href="">About us</a>
                </nav>
                <img onClick={toggle} className="hambBtn" src={`${hambOpen? "images/close-hbg.svg": "images/open-hbg.svg"}`} alt="" />
                <button className="navBtn"  >Book a Tour</button>
            </header>
            
            <div className={`${hambOpen? "mobileNav active" : "mobileNav closed"}`}>
                    <a href="">Discover</a>
                    <a href="">Destination</a>
                    <a href="">About us</a>
                    <button className="navBtn"  >Book a Tour</button>
            </div>

        </div>
    )
  
    
}
