let a = document.getElementById("input1").value;
let b = document.getElementById("input2").value;  
let c = document.getElementById("operation").value;

a = parseInt(a);
b = parseInt(b);

function CalculateF(){
    let sum;
    if(c == "+"){
    sum = a + b;}

    let scadere;
    if(c == "-"){
    scadere = a - b;}

    let produs;
    if(c == "*"){
    produs = a * b;}

    let impartire;
    if(c == "/"){
    impartire = a / b;}
}
window.onload = document.getElementById("submit").onsubmit = CalculateF;

