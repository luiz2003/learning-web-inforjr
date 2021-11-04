import './style.css'

function date(){
    return new Date().getFullYear().toString();
}

function Footer() {
    return (
        
        <div className = "footer">

            <div className="footer-upper-part">
                
                <div className="mobile-footer-logo logo">
                    <img src="images/logo.svg" alt="" />
                </div>
                <div className="footer-links">
                    
                    <div className="footer-title">
                        <img className="logo" src="images/logo.svg" alt="" />

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                
                    <div className="footer-block">
                        <h2>Tour</h2>

                        <div className="links">
                            <p>Thailand</p>
                            <p>Canada</p>
                            <p>Korea</p>
                            <p>Italy</p>
                        </div>
                    </div>

                    <div className="footer-block">
                        <h2>Support</h2>

                        <div className="links">
                            <p>Account</p>
                            <p>Legal</p>
                            <p>Contact</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>  
                    
                    <div className="footer-block">

                        <h2>Useful Pages</h2>

                        <div className="links">
                            <p>Deals</p>
                            <p>FAQs</p>
                            <p>Why Us</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-end">
                <p id="copyright"> @ {date()} <span id="year"> </span> · All rights reserved.</p> 

            </div>
        </div>
        
    )
}

export default Footer
