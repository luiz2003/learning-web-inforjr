let form = document.getElementById('form')

//get info with DOM and then send it with post method
function submit() {
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

    //clear input camps after submiting
    name = ''
    email = ''
    text = ''
}
// submit with submit button
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    submit()
})

//submit with enter key
document.getElementById('name').addEventListener('keydown',(event)=>{
    if (event.key == 13) {
        event.preventDefault()
        submit()
    }
})

document.getElementById('email').addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
        event.preventDefault()
        submit()
    }
})
document.getElementById('text').addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
        event.preventDefault()
        submit()
    }
})