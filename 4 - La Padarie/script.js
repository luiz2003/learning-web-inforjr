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

let clientCards = [
    {
        clientName: "Alexandre Shyjada Sousa",
        breadAmount: 50,
        clientInflux: 25,
        id : 0
    },
    {
        clientName: "Luiz Valverde",
        breadAmount: 5,
        clientInflux:25,
        id : 1
    }
]
let queue = document.getElementById('queue')
clientCards.forEach((card)=>{
    queue.innerHTML += 
    `
    <div class="client-card">
    <div class="client-card-text">
        <h2 id="clientName">Alexandre Shyjada Sousa</h2>
        <div class="client-card-info">
            <h3>Total de pães: <p><span id="clientBread">50</span>pães</p> </h3> 
            <h3>Total a pagar: <p><span id="clientInflux">R$ 25,00</span></p></h3>
        </div>
    </div>
   <img id="deleteBtn" src="images/delete-icon.svg" alt="">
</div>
    `
})
addBtn.addEventListener('click',() => {

})
addBtn.addEventListener('click',toggleMenu)
cancelBtn.addEventListener('click',untoggleMenu)