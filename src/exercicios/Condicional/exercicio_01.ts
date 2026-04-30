// Crie um programa que leia um número e informe se ele é: 
// Par ou Ímpar
// Positivo ou Negativo
export function exercicio_01(): void {
let numero:number = 0 
numero = Number(prompt("Informe um número:"));

if(numero%2==0){
console.log("Ele é par")
}
else{
    console.log("Ele impar")
}
if(numero > 0){
console.log("Ele é positivo")
}
else{
    console.log("Ele é negativo")
}
 }

