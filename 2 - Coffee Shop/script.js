const btnMobile = document.getElementById('btnMbl')
console.log(btnMobile)
function toggleMenu() {
    const nav =  document.getElementById('nav')
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        document.getElementById("menuImg").src="images/icon-nav2.png";
    }
    else{
        document.getElementById("menuImg").src="images/nav-icon.png";
    }
}


btnMobile.addEventListener('click',toggleMenu)