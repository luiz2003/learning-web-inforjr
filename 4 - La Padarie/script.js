//modal script
const addBtn = document.getElementById('addBtn')
const cancelBtn = document.getElementById('cancelBtn')
const modal =  document.getElementById('modal')
function toggleMenu() {
    
    modal.classList.toggle('active')
    document.getElementById("nameInput").focus()
   
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
let sendBtn = document.getElementById('sendBtn')
let breadInput = document.getElementById('breadInput')
let nameInput = document.getElementById('nameInput')
breadInput.addEventListener('keydown',(event) => { 
    if (event.keyCode === 13){
        document.getElementById("sendBtn").click();
        event.preventDefault();
    }
    else if(event.keyCode === 27){
        event.preventDefault()
        document.getElementById("cancelBtn").click();
    }
});
nameInput.addEventListener('keydown',(event) => {
    if (event.keyCode === 13){ 
        event.preventDefault();
        document.getElementById("sendBtn").click();
    }
    else if(event.keyCode === 27){
        event.preventDefault()
        document.getElementById("cancelBtn").click();
    }
});

// card rendering and updating scripts
let clientCards = [
    
]

function render(){
    let queue = document.getElementById('queue')
    let queueLenght = document.getElementById('queueLenght')
    let breadAmount = document.getElementById('breadAmount')
    let moneyInflux = document.getElementById('moneyInflux')
    queueLenght.value = 0
    breadAmount.value = 0
    moneyInflux.value = 0
    queue.innerHTML = ""
    clientCards.forEach((card)=>{
        card.id = clientCards.indexOf(card) 
        queue.innerHTML += 
        `
        
        <div class="client-card" id =${card.id}>
            <div class="client-card-text">
                <h2 id="clientName">${card.clientName}</h2>
                <div class="client-card-info">
                    <h3>Total de pães: <p><span id="clientBread">${card.breadAmount}</span>pães</p> </h3> 
                    <h3>Total a pagar: <p><span id="clientInflux">${((card.breadAmount)/2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p></h3>
                </div>
            </div>
            <img id="deleteBtn" onclick="removeCard(${card.id})" src="images/delete-icon.svg" alt="">
        </div>
        `
        queueLenght.value = clientCards.length
        breadAmount.value += Number(card.breadAmount)
        moneyInflux.value += card.clientInflux
        
    })
    queueLenght.innerHTML = queueLenght.value
    breadAmount.innerHTML  = breadAmount.value
    moneyInflux.innerHTML = moneyInflux.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
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
    }
    render()
}
function removeCard(index){
    clientCards.splice(index,1)
    render()
}