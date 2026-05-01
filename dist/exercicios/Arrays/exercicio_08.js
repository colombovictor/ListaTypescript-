// Boletim Híbrido
// Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não Avaliado).
// Insira os valores: 8.5, 10, "N.A", 7.2.
// Crie uma lógica que percorra o array e:
// Se for um número, imprima: "Nota: [valor]".
// Se for "N.A", imprima: "O aluno não realizou a prova".
export function exercicio_08() {
    let notasSemestre = [8.5, 10, "N.A", 7.2];
    for (let i = 0; i < notasSemestre.length; i++) {
        if (notasSemestre[i] != "N.A") {
            alert(`Nota: ${notasSemestre[i]}`);
        }
        else {
            alert(`O aluno não realizou a prova`);
        }
    }
}
const btn = document.getElementById("btn-b8");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_08);
