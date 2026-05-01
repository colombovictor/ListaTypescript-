// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: ;Abaixo do peso;
// o Entre 18.5 e 24.9: ;Peso Normal;
// o 25 ou mais: ;Sobrepeso;
//  Função exibir_laudo(nome, classificacao): Imprime: ;Paciente: [nome] - Status:
// [classificacao];.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.


export function exercicio_10 (): void{
    function calcular_imc(peso:number,altura:number): any{
        imc = peso/altura**2
        return imc
    }
    function classificar_imc(imc:number): any{
        if (imc < 18.5){
            return classificacao = String(`Abaixo do peso`)
        }else if (imc >= 18.5 && imc <= 24.9 ){
            return classificacao = String(`Peso normal`)
        }else{
            return classificacao = String(`Sobrepeso`)
        }
    }
    function exibir_laudo(nome:string, classificacao:string):any{
        return alert(`O paciente: ${nome}
está classificado como: ${classificacao}`)

    }
    let imc: number = 0, classificacao:string = '', peso:number = 0, altura:number = 0, nome:string = ''
    nome = String(prompt(`Qual o seu nome: `))
    peso = Number(prompt(`Qual sua peso: `))
    altura = Number(prompt(`Qual a sua altura: `))
    calcular_imc(peso, altura)
    classificar_imc(imc)
    exibir_laudo(nome, classificacao)

}
const btn = document.getElementById("btn-f10");

btn?.addEventListener("click", exercicio_10);