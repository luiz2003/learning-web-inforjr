const addBtn = document.getElementById('addBtn')
const cancelBtn = document.getElementById('cancelBtn')
const modal =  document.getElementById('modal')
function toggleMenu() {
    
    modal.classList.toggle('active')

}
function untoggleMenu() {
    let nameInput = document.getElementById('nameInput')
    let breadInput = document.getElementById('breadInput')
    nameInput.value =""
    breadInput.value=""
    modal.classList.remove('active')

}
addBtn.addEventListener('click',toggleMenu)
cancelBtn.addEventListener('click',untoggleMenu)

let clientCards = [
    
]
function values(){
    let queueLenght = document.getElementById('queueLenght')
    let breadAmount = document.getElementById('breadAmount')
    let moneyInflux = document.getElementById('moneyInflux')
    queueLenght.value = 0
    breadAmount.value = 0
    moneyInflux.value = 0
    clientCards.forEach((card)=>{
        queueLenght.value = clientCards.length
        breadAmount.value += Number(card.breadAmount)
        moneyInflux.value += card.clientInflux
    })
    queueLenght.innerHTML = queueLenght.value
    breadAmount.innerHTML  = breadAmount.value
    moneyInflux.innerHTML = moneyInflux.value
}
function render(){
    let queue = document.getElementById('queue')
    queue.innerHTML = ""
    clientCards.forEach((card)=>{
        queue.innerHTML += 
        `
        
        <div class="client-card">
        <div class="client-card-text">
            <h2 id="clientName">${card.clientName}</h2>
            <div class="client-card-info">
                <h3>Total de pães: <p><span id="clientBread">${card.breadAmount}</span>pães</p> </h3> 
                <h3>Total a pagar: <p><span id="clientInflux">R$ ${(card.breadAmount)/2}</span></p></h3>
            </div>
        </div>
    <img id="deleteBtn" src="images/delete-icon.svg" alt="">
    </div>
        `
    })
}
function addClientCard(){
    let clientName = document.getElementById('nameInput').value
    let breadAmount = document.getElementById('breadInput').value
    let nameInput = document.getElementById('nameInput')
    let breadInput = document.getElementById('breadInput')
    
    if(clientName != "" && breadAmount>0){
        clientCards.push(
            {
                clientName,
                breadAmount,
                clientInflux: breadAmount/2,
                id: 0
            }
        )
        nameInput.value =""
        breadInput.value=""
        modal.classList.remove('active')
    }
    else{
        window.alert("Por favor insira valores válidos")
        nameInput.value =""
        breadInput.value=""
    }
    render()
    values()
}


 