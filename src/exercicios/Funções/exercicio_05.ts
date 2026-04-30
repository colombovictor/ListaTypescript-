// Crie uma função que recebe dois números: início e fim. Depois use um
// laço para percorrer esse intervalo e
// imprimir apenas os números que são múltiplos de 3.

export function exercicio_05(): void {
  function intervalo(inicio: number, fim: number): any {
    for (let i = inicio; i < fim; i++) {
      if (i % 3 == 0) {
        alert(i);
      }
    }
  }
  let inicio: number = 0;
  let fim: number = 0;
  inicio = Number(prompt("Digite um número"));
  fim = Number(prompt("Informe o número para sair do programa"));
  intervalo(inicio, fim);
}
const btn = document.getElementById("btn-f5");

btn?.addEventListener("click", exercicio_05);
