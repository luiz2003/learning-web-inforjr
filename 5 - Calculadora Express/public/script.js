//operation selection script
var sum = false;
var sub = false;
var mul = false;
var div = false; 

let addBtn = document.getElementById('addBtn')
let subBtn = document.getElementById('subBtn')
let mulBtn = document.getElementById('mulBtn')
let divBtn = document.getElementById('divBtn')

let startColor = {r: 15, g:113, b:115};
let endColor   = {r:  10, g: 71, b: 72};

function reverseFade(){
    buttons = [ 
        {
            bool : sum,
            btn : addBtn
        },
        {
            bool : sub,
            btn : subBtn
        },
        {
            bool : mul,
            btn : mulBtn
        },
        {
            bool : div,
            btn : divBtn
        }
    ]
    
    buttons.forEach(button => {
        if(button.bool){
            fade(button.btn,endColor,startColor,150)
        }
    });
}

function sumSelect(){
    reverseFade()
    
    sum = true;
    sub = false;
    mul = false;
    div = false; 
    
    fade(addBtn,startColor,endColor,150)    
}
function subSelect(){
    reverseFade()
    
    sum = false;
    sub = true;
    mul = false;
    div = false;

    fade(subBtn,startColor,endColor,150)   
}
function mulSelect(){
    reverseFade()
    
    sum = false;
    sub = false;
    mul = true;
    div = false;

    fade(mulBtn,startColor,endColor,150)   
}
function divSelect(){
    reverseFade()
    
    sum = false;
    sub = false;
    mul = false;
    div = true;

    fade(divBtn,startColor,endColor,150)   
}
//redirect to result script
function calculate(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if(num1 == '' || num2==''){
        window.alert("Please give 2 numbers")
    }
    else if(!sum && !sub && !mul && !div){
        window.alert("Please, select an operation")
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

//fade to new color when selected script
lerp = function(a, b, u) {
    return (1 - u) * a + u * b;
};

fade = function(element, start, end, duration) {
    var interval = 10;
    var steps = duration / interval;
    var step_u = 1.0 / steps;
    var u = 0.0;
    var theInterval = setInterval(function() {
        if (u >= 1.0) {
            clearInterval(theInterval);
        }
        var r = Math.round(lerp(start.r, end.r, u));
        var g = Math.round(lerp(start.g, end.g, u));
        var b = Math.round(lerp(start.b, end.b, u));
        var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
        element.style.setProperty('background-color', colorname);
        u += step_u;
    }, interval);
    console.log('interpolation!')
};