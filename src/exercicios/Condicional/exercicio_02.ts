// Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na variável mês, um número entre 1 e 12,
// correspondendo a um dos meses do ano. No final, você deve imprimir uma mensagem conforme o exemplo:
// "A estação do ano correspondente ao mês 3 é Verão" Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera

export function exercicio_02(): void {
  let mes: number = 0;
  while (mes <= 0 || mes> 12 ) {
    mes = Number(prompt("Informe um mês:OBS(Digite um número entre 1 e 12)"));
    if (mes >=1 && mes <= 12) {
      if (mes >= 1 && mes <= 3) {
        window.alert("É verão");
        console.log("É verão");
      } else if (mes >= 4 && mes <= 6) {
        window.alert("É outono");
        console.log("É outono");
      } else if (mes >= 7 && mes >= 9) {
        window.alert("É inverno");
        console.log("É inverno");
      } else {
        window.alert("É Primavera");
        console.log("É Primavera");
      }
    } else {
        window.alert("Número digitado é inválido");
      console.log("Número digitado é inválido");
    }
  }
}
