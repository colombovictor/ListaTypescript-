// Crie um programa que peça números até o usuário digitar 0 e mostre:
// Quantidade de números digitados
// Soma total

export function exercicio_01():void{
    let numero:number, resultado:number = 0, somatotal:number = 0
    numero = Number(prompt("Informe um número:"))
while(numero !=0){
resultado = resultado + 1
somatotal =  numero+somatotal
window.alert(resultado)
window.alert(somatotal)
numero = Number(prompt("Informe um número:obs: Digite 0 para parar o programa"))



}
console.log("Você parou o programa!!")
window.alert("Você parou o programa!!")
}
const btn = document.getElementById("btn-4");

btn?.addEventListener("click", exercicio_01);
