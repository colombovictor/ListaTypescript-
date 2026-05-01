// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.
export function exercicio_02() {
    let notas = 0, listanotas = [], total = 0, media = 0, acima_Media = [];
    while (notas != -1) {
        notas = Number(prompt(`Informe a nota do aluno ou [-1] para encerrar o programa: `));
        if (notas == -1) {
            break;
        }
        listanotas[listanotas.length] = notas;
        total = listanotas.reduce((total, notas) => total += notas, 0);
    }
    media = total / listanotas.length;
    acima_Media = listanotas.filter((n) => {
        return n > media;
    });
    alert(`A quantidade de notas lidas foi: ${listanotas.length}
As notas informadas foram ${listanotas.join(` - `)}
As notas informadas em ordem inversa é ${listanotas.reverse().join(` - `)}
A soma das notas é ${total}
A média das notas é ${media}
A notas acima da media foram: ${acima_Media.join(` - `)}
`);
}
const btn = document.getElementById("btn-b2");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_02);
