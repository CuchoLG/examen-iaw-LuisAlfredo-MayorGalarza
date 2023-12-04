const input = require ("prompt-sync")({ sigint:true});

const dineroIn = input("cantidad de dinero a invertir ==> ");
const interes = input("cantidad de interes ==> ");
const anos = input("cantidad de años ==> ");

let años = Number();
let capitalIn = Number();
let intereses = Number();


console.log ("has invertido " + dineroIn + " euros al "+ interes + " durante " + anos + " años")
;

console.log ("El capital previsto era: " + )

function capitalfinal(capitalTo, interes){
    (capitalTo * interes(1-5/100)) + capitalTo
}

function capitalTo(capitalIn, interes){
    capitalIn + (interes * años)
}