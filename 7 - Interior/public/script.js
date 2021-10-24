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
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('text').value = ''
}

//error message rendering
let warning = document.getElementById('warning')
function showWarning() {
    warning.classList.remove('hide')
    warning.classList.add('showAlert')
    warning.classList.add('show')
    setTimeout(()=>{
        removeWarning()
    },5000)
  
}
function removeWarning() {
    warning.classList.add('hide')
    warning.classList.remove('show')
    setTimeout(()=>{
        warning.classList.remove('showAlert')
    },1000)
}

// data validation 
function validateData(){

    let name = document.getElementById('name').value.trim().toString()
    let email = document.getElementById('email').value.trim().toString()
    let text = document.getElementById('text').value.trim().toString()
    let warningTxt = document.getElementById('warningTxt')
    if (name == '') {
        warningTxt.innerHTML = 'Please insert your name!'
        showWarning()
        return false
    }
    else if (email == '') {
        warningTxt.innerHTML = 'Please insert your email!'
        showWarning()
        return false
    }
    else if(text == '') {
        warningTxt.innerHTML = 'Please insert your message!'
        showWarning()
        return false
    }
    else if (name.length < 3 || /[^a-z]+$/gi.test(name)) {
        warningTxt.innerHTML = 'Please insert a valid name!'
        showWarning()
        return false
    }
    else if (email.length < 5 || /[^@]+$/gi.test(email)) {
        warningTxt.innerHTML = 'Please insert a valid email!'
        showWarning()
        return false
    }
    return true
}
// submit with submit button
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (validateData()) {
        submit()
    }
})

//submit with enter key
document.getElementById('name').addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
        event.preventDefault()
        if (validateData()) {
            submit()
        }
    }
})

document.getElementById('email').addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
        event.preventDefault()
        if (validateData()) {
            submit
        }
    }
})
document.getElementById('text').addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
        event.preventDefault()
        if (validateData()) {
            submit()
        }
    }
})