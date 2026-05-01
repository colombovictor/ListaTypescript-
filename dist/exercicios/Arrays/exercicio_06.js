// Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// Pedir os nomes das pessoas usando o Prompt e o método push();
// Apresentar os nomes digitados;
// Ordenar o vetor usando o sort();
// Apresentar os nomes inseridos de forma ordenada.
export function exercicio_06() {
    let lista_Nomes = [], nome = "";
    for (let i = 0; i < 15; i++) {
        nome = String(prompt(`Informe o nome da pessoa para adicionar a lista: `));
        lista_Nomes.push(nome);
    }
    console.log(lista_Nomes);
    console.log(lista_Nomes.sort());
}
const btn = document.getElementById("btn-b6");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_06);
