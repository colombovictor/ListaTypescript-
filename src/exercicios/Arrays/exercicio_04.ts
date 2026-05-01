// Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média 
// de seus alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento. A função deve:
// Calcular a média das notas.
// Arredondar a média para duas casas decimais.
// Retornar o valor da média.

export function exercicio_04(): void{
    function calcular_media(notas:number): any{
        media = notas/nota.length
        return media
    }
    let nota:number[] = [], media:number = 0, notas:number = 0
    while (true){
    nota[nota.length] = Number(prompt(`Informe a nota do aluno ou [-1] para encerrar o programa`))
    if (nota[nota.length-1] == -1){
        nota.splice(-1, nota.length-1)
        break
    }else{
    notas = nota.reduce((notas, nota)=>
        notas += nota,0
    )}
}
    calcular_media(notas)
    alert(`A media do aluno foi: ${media.toFixed(2)}`)
}

const btn = document.getElementById("btn-b4");

btn?.addEventListener("click", exercicio_04);