import './style.css'

function AboutUs() {
    return (
        <div className = "about-us">
           <img className="aside-img" src="images/about-us.svg" alt="" />

           <div className="services">
               <h1 className="services-title">Our Quality Services</h1>

               <div className="service-cards">
                   
                   <div className="service-card">
                       
                       <img src="images/ticket.svg" alt="" className="service-info-img" />
                       
                       <div className="service-txt">
                            <h2>Ticket</h2>

                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                       </div>
                   </div> 

                   <div className="service-card">
                       
                       <img src="images/car.svg" alt="" className="service-info-img" />
                       
                       <div className="service-txt">
                            <h2>Driver</h2>

                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                       </div>
                   </div> 

                   <div className="service-card">
                       
                       <img src="images/plane.svg" alt="" className="service-info-img" />
                       
                       <div className="service-txt">
                            <h2>Tour</h2>

                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                       </div>
                   </div>

               </div>
            
           </div>
        </div>
    )
}

export default AboutUs
