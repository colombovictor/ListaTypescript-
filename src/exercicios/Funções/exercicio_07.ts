// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.

// Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, 
// retornando o consumo médio (km/l).
// Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos 
// quilômetros o carro percorre com o tanque cheio.

export function exercicio_07():void{
    let distancia:number=0;
    let quanticombus:number =0;
    let consumom:number=0;
    let capacidadetotal:number=0;
    let tanquecheio:number = 0;

    distancia = Number(prompt("Qual foi a distancia percorrida hoje meu patrão"))
    quanticombus = Number(prompt("Qual foi o consumo de gasosa hoje chefe?"))
    capacidadetotal =Number(prompt("Qual a quantidade que cabe ai dentro (LÁ ELE) do tanque?"))

    function consumo():any{
     consumom = distancia/quanticombus

    }
    function capacidade():any{
     tanquecheio = capacidadetotal*consumom
    }
    consumo()
    capacidade()
    alert(`O seu consumo médio padrão é` +consumom)
    alert(`O seu automovel percorre com o tanque cheio` + tanquecheio)

}
 
const btn = document.getElementById("btn-f7");

btn?.addEventListener("click", exercicio_07);