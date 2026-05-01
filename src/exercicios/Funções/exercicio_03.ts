// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

export function exercicio_03(): void{
    function gerar_Triangulo(numero:number): any{
        for (let i:number = 0; i<numero; i++){
            triangulo[i] = asterico[i]
            console.log(triangulo[i])
            asterico[i+1] = asterico[i] + asterico[i]
        }
    }
    let asterico:any = ['*'], triangulo:any = [], largura:number = 0, numero:number = 0
    numero = Number(prompt(`Informe o tamanho do seu triangulo: `))
    gerar_Triangulo(numero)

}

const btn = document.getElementById("btn-f3");

btn?.addEventListener("click", exercicio_03);