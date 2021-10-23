let form = document.getElementById('form')

//get info with DOM and then send it with post method
form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let text = document.getElementById('text').value

    const data = {
        name,
        email,
        text
    }

    fetch('http://localhost:3000/submit',{
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
})