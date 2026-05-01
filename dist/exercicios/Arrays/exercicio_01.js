// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa
export function exercicio_01() {
    let vetor, par = [], impar = [], multi2 = [], multi3 = [], multi4 = [];
    vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (let i = 0; i < vetor.length - 1; i++) {
        if (vetor[i] % 2 == 0) {
            par.push(vetor[i]);
            multi2.push(vetor[i]);
        }
        else {
            impar.push(vetor[i]);
        }
        if (vetor[i] % 3 == 0) {
            multi3.push(vetor[i]);
        }
        if (vetor[i] % 4 == 0) {
            multi4.push(vetor[i]);
        }
    }
    console.log(`A lista de números é ${vetor}
A lista de números pares é ${par}
A lista de números impares é ${impar}
A lista de números multiplos de 2 é ${multi2}
A lista de números multiplos de 3 é ${multi3}
A lista de números multiplos de 4 é ${multi4}
A lista de números invertida é ${vetor.reverse()}`);
}
const btn = document.getElementById("btn-b1");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_01);
