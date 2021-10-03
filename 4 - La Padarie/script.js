const addBtn = document.getElementById('addBtn')
const cancelBtn = document.getElementById('cancelBtn')
function toggleMenu() {
    const modal =  document.getElementById('modal')
    modal.classList.add('active')

}
function untoggleMenu() {
    const modal =  document.getElementById('modal')
    modal.classList.remove('active')

}
addBtn.addEventListener('click',toggleMenu)
cancelBtn.addEventListener('click',untoggleMenu)