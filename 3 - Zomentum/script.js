document.getElementById('body').innerHTML=
`
<header id="header">
<img src="images/logo.svg" alt="">
<button id="btnMbl" ><img id="menuImg" src="images/hamburguer-icon.svg" alt=""></button> 
<nav id="nav">
    <a href="">Features</a>
    <a href="">Services</a>
    <a href="">Contact</a>
    <button>Get a demo</button>
</nav>
</header>

<div class="hero" data-aos="fade-up" data-aos-mirror="true" data-aos-once="false">

<div class="heroTitle">
    <h1>Find the right partners to fuel your business growth</h1>
    <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>
</div>
<div class="heroExtra">
    <img src="images/PartnerHeroImageLeft.svg" alt="">
    <button>Register today</button>
    <img src="images/PartnerHeroImageRight.svg" alt="">
</div>
</div>

<div class="intro" >
<h1>List. Sell. Grow</h1>

<div class="intro-icons" data-aos="fade-down">
    <div class="intro-block">
        <img src="images/icon1.svg" alt="">
        <p>Be a part of the only  All-In-One platform for IT</p>
    </div>
    
    <div class="intro-block">
        <img src="images/icon2.svg" alt="">
        <p>Come closer to finding your next customer</p>
    </div>

    <div class="intro-block">
        <img src="images/icon3.svg" alt="">
        <p>Grow your business with a single click</p>
    </div>
</div>
</div>

<div class="cards-area">

<div class="card cardInv" data-aos="fade-right" data-aos-mirror="true" data-aos-once="false" data-aos-offset="400" 
data-aos-delay="25">
    <div class="card-txt">
        <h2>Your channel program <br> on steroids</h2>
        <p>Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.</p>
    </div>
    <img class="card-img" src="images/figure1.svg" alt="" >
</div>

<div class="card" data-aos="fade-left" data-aos-mirror="true" data-aos-once="false" data-aos-offset="400" 
data-aos-delay="25">
    <img class="card-img" src="images/figure2.svg" alt="">
    <div class="card-txt">
        <h2>Become the vendor everyone wants to buy from</h2>
        <p>Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!</p>
        <a href="">Signup now <img src="images/Right menu Arrow.svg" alt=""></a>
    </div>
</div>

<div class="card cardInv" data-aos="fade-right" data-aos-mirror="true" data-aos-once="false" data-aos-offset="400" 
data-aos-delay="25">
    <div class="card-txt">
        <h2>It’s like having Your best
            Salesman on autopilot</h2>
        <p>Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.</p>
        <a href="">Signup now <img src="images/Right menu Arrow.svg" alt=""></a>
    </div>
    <img src="images/figure3.svg" alt="">
</div>

<div class="card" data-aos="fade-left" data-aos-mirror="true" data-aos-once="false" data-aos-offset="400" 
data-aos-delay="25">
    <img  src="images/figure4.svg" alt="">
    <div class="card-txt">
        <h2>Track your channel performance</h2>
        <p>Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.</p>
        <a href="">Signup now <img src="images/Right menu Arrow.svg" alt=""></a>
    </div>
</div>
</div>

<footer>
<div class="footer-links" data-aos="fade-up">
    
    <div class="footer-block">
        <h1>Product</h1>

        <div class="footer-txt">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Integrations</a>
            <a href="">Product</a>
        </div>
    </div>

    <div class="footer-block">
        <h1>Company</h1>
        
        <div class="footer-txt">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Submit a Ticket</a>
            <a href="">Privacy policy</a>
            <a href="">Terms & conditions   </a>
        </div>
    </div>
    
    
  
        <div class="footer-block">
            <h1>Guides</h1>
            
            <div class="footer-txt">
                <a href="">Msp</a>
                <a href="">Msp Sales</a>
            </div>
        </div>
        
        <div class="footer-block" id="teste">
            <h1>Contact Us</h1>
            
            <div class="footer-txt">
                <a href="">Address</a>
            </div>
        </div>
</div>

<p id="copyright">© <span id="year"> </span> Pactora Inc. All rights reserved.</p> 

<script>
    document.getElementById("year").innerHTML = new Date().getFullYear();
</script>
</footer>


`
AOS.init()
let header = document.getElementById('header')
let nav = document.getElementById('nav')
let root = document.documentElement;
let headerHeight = header.offsetHeight - nav.offsetHeight
console.log( headerHeight)
root.style.setProperty('--headerHeight',headerHeight+"px")


const btnMobile = document.getElementById('btnMbl')
console.log(btnMobile)  
function toggleMenu() {
    const body = document.getElementById('body')
    const nav =  document.getElementById('nav')
    nav.classList.toggle('active')
    body.classList.toggle('active')

    if(nav.classList.contains('active')){
        document.getElementById("menuImg").src="images/close-icon.svg";
    } 
    else{
        document.getElementById("menuImg").src="images/hamburguer-icon.svg";
    }
}


btnMobile.addEventListener('click',toggleMenu)