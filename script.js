let A //variabila rescriptiva
var a //versiune mai veche
const b = 1456 //variabila constanta

let name = "Name"; //string
let age = 1243124; //number
let bool = true; //boolean
let nul = null; //without value
let apple; // undefined
let obj = {
    name: "name",
    age: 2000
} //object

let n = NaN; //nan value
let bane = () => console.clear;

+ - * / % ** //operatiuni

// = atribuim
// == verificam/comparam
// === verificam si tipul de date


let value = 12.0;
if (value == 12){
    console.log("True");    
}else{
    console.log("False");
}

for(i=0; i<= 10; i++){
    // 0 => 1 => 2...
}

let count = 0;
while (count <=10){
    console.log(count);
    count += 1;
}

function nameF(p1, p2){
    //code
}

class className {
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    classFunc(){
        console.log(this.p1 + this.p2);
    }
}
