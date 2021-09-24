const btnMobile = document.getElementById('btnMbl')
console.log(btnMobile)

function toggleMenu() {
    const nav =  document.getElementsByTagName('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click',toggleMenu)