import './style.css'

export default function Discover() {
    return (
        <div className="discover" id="discover">
            <aside className ="discover-aside">
                <h1 className="hero-title">Find your next place to travel</h1>
                
                <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type.
                </p>
                
                <div className="input">
                    <input type="text" placeholder="Burj khalifa, Dub" />
                    <button className="search-btn">Search</button>
                </div>

            </aside>

            <img src="images/hero-img.svg" alt="" />
            
        </div>
    )
}
