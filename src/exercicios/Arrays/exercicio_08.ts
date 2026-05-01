// Boletim Híbrido
// Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não Avaliado).
// Insira os valores: 8.5, 10, "N.A", 7.2.
// Crie uma lógica que percorra o array e:
// Se for um número, imprima: "Nota: [valor]".
// Se for "N.A", imprima: "O aluno não realizou a prova".
export function exercicio_08(): void{

let notasSemestre:(number|string) [] = [8.5, 10, "N.A", 7.2]

for (let i:number = 0; i < notasSemestre.length; i++){
    if (notasSemestre[i] != "N.A"){
        alert(`Nota: ${notasSemestre[i]}`)
    }else{
        alert(`O aluno não realizou a prova`)
    }
}
}


const btn = document.getElementById("btn-b8");

btn?.addEventListener("click", exercicio_08);