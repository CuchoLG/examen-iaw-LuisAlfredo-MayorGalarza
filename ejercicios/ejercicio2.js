const input = require('prompt-sync')({siginit: true});

let cadena= input("Introduce un texto ==>" );
let suma=0;
cadena = cadena.toLowerCase();

for(i=0; i<cadena.length; i++){

   if( esDigito(cadena.charAt(i))){
       suma++
   }
}

console.log("La suma de las cadenas es: " + cadena )
 console.log("Se han intruducido: "+ suma + " digitos.")
 
 function esDigito(caracter){
     return (caracter=='0'|| 
     caracter=='1'|| 
     caracter=='2'|| 
     caracter=='3'||
     caracter=='4'|| 
     caracter=='5'|| 
     caracter=='6'|| 
     caracter=='7'|| 
     caracter=='8'|| 
     caracter=='9')
 }