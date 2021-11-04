import './style.css'

export default function Destination() {
    return (
        <div className = "destination" id ="destination">

            <div className="hero2">

                <img src="images/destination.svg" alt="" />

                <aside>
                  
                    <div className="aside-title">
                        <h1>Travel to any corner of the World</h1>

                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type.
                        </p>
                    </div>

                    <div className="info">
                        <div className="info-text">
                            <div className="info-block">
                                <h2>20</h2>
                                <p>Years Experience</p>
                            </div>

                            <div className="info-block">
                                <h2>55</h2>
                                <p>Destination Collaboration</p>
                            </div>

                            <div className="info-block">
                                <h2>600+</h2>
                                <p>Tourist Destination</p>
                            </div>

                        </div>

                        <button>Explore Destination</button>
                    </div>
                </aside>

            </div>

            <div className="cards">
                <div className="card">

                    <img className="cardImg" src="images/Mountains.svg" alt="" />

                    <div className="card-txt">
                        <h1 className="card-title">Travel to Mountains</h1>

                        <img className="star" src="images/stars.svg" alt="" />

                        <p className="price"> $6000</p>
                    </div>
                </div>

                <div className="card">

                    <img className="cardImg" src="images/Desert.svg" alt="" />

                    <div className="card-txt">
                        <h1 className="card-title">Travel to Desert</h1>

                        <img className="stars" src="images/stars.svg" alt="" />

                        <p className="price">$6000 </p>
                    </div>
                </div>

                <div className="card">

                    <img className="cardImg" src="images/Camping.svg" alt="" />

                    <div className="card-txt">
                        <h1 className="card-title">Camping in Mountains</h1>

                        <img className="stars" src="images/stars.svg" alt="" />

                        <p className="price"> $6000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
