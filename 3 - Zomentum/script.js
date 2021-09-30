
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