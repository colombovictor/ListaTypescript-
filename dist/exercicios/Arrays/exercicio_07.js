//  Lista de Presença
// Crie um array chamado presenca que aceite apenas strings.
// Adicione 5 nomes de alunos.
// Tente adicionar um número e observe o erro do compilador.
// Use um loop para imprimir cada nome em letras maiúsculas.
export function exercicio_07() {
    let presenca = [], i = 0, nome;
    for (i = 0; i < 3; i++) {
        nome = prompt(`Informe o nome do aluno na lista de presença: `);
        while (!isNaN(nome)) {
            nome = prompt(`Informe somente nomes na lista de presença: `);
        }
        presenca.push(nome);
    }
    for (let i2 = 0; i2 < presenca.length; i2++) {
        console.log(presenca[i2].toUpperCase());
    }
}
const btn = document.getElementById("btn-b7");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_07);
