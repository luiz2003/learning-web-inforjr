const btnMobile = document.getElementById('btnMbl')
console.log(btnMobile)  
function toggleMenu() {
    const nav =  document.getElementById('nav')
    nav.classList.toggle('active')

    if(nav.classList.contains('active')){
        document.getElementById("menuImg").src="images/close-icon.svg";
    } 
    else{
        document.getElementById("menuImg").src="images/hamburguer-icon.svg";
    }
}


btnMobile.addEventListener('click',toggleMenu)