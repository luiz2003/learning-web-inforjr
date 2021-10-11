//operation selection script
var sum = false;
var sub = false;
var mul = false;
var div = false; 

function sumSelect(){
    sum = true;
    sub = false;
    mul = false;
    div = false; 
}
function subSelect(){
    sum = false;
    sub = true;
    mul = false;
    div = false; 
}
function mulSelect(){
    sum = false;
    sub = false;
    mul = true;
    div = false; 
}
function divSelect(){
    sum = false;
    sub = false;
    mul = false;
    div = true; 
}
//redirect to result script
function calculate(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if(num1 == '' || num2==''){
        window.alert("Please give 2 numbers")
    }
    else if(!sum && !sub && !mul && !div){
        window.alert("Plese, select an operation")
    }
    else if(sum){
        window.location.href = `http://localhost:3000/sum/${num1}/${num2}`;
    }
    else if(sub){
        window.location.href = `http://localhost:3000/subtract/${num1}/${num2}`;
    }
    else if(mul){
        window.location.href = `http://localhost:3000/multiply/${num1}/${num2}`;
    }
    else if(div){
        window.location.href = `http://localhost:3000/divide/${num1}/${num2}`;
    }

}
