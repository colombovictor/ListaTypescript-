// Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos: 
// inicio e fim. A função deve seguir os seguintes requisitos:
// Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. 
// Caso não seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
// Utilize uma estrutura de repetição (for ou while) 
// para percorrer todos os números inteiros contidos nesse intervalo (inclusive o início e o fim).
// Durante a iteração, armazene todos os números do intervalo em um array.
// Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer a lista criada.
// Imprima no console apenas os números que são múltiplos e divisores da sua idade.
// Ao final, exiba a quantidade total de números que foram impressos.
export function exercicio_09() {
    function gerarIntervaloFiltrado(inicio, fim) {
        inicio = Number(prompt(`Informe um número inteiro para o inicio do laço: `));
        fim = Number(prompt(`Informe um número inteiro maior que ${inicio} para o fim do laço: `));
        if (inicio >= fim) {
            inicio = Number(prompt(`Informe um número que seja maior que o ${fim}: `));
        }
        else {
            for (i = inicio - 1; i <= fim - 1; i++) {
                lista_Numeros[i] = i + 1;
            }
        }
    }
    let inicio = 0, fim = 0, lista_Numeros = [], i = 0, divi_Idade = [], ini = 0;
    gerarIntervaloFiltrado(inicio, fim);
    alert(lista_Numeros);
    for (let n = 1; n <= lista_Numeros.length; n++) {
        if (lista_Numeros[n] % 24 == 0) {
            divi_Idade[ini] = lista_Numeros[n];
            ini++;
        }
    }
    console.log(`Os numeros multiplos e divisores de 24 são: ${divi_Idade}`);
}
const btn = document.getElementById("btn-b9");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_09);
