// Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque.
// O programa deve solicitar o preço unitário do produto e a quantidade comprada.
// Crie uma função que recebe preço e quantidade. Se a quantidade for
// maior que 10 unidades, aplica 5% de desconto sobre o valor total
// daquele item. Retorna o valor final.
// O programa deve repetir a solicitação até que o preço informado seja zero.
// Ao encerrar, exiba o total geral investido no estoque e a média de preço dos
//  produtos cadastrados.

export function exercicio_08(): void {
  let preco: number = 1;
  let precos:number =0;
  let precoquantidade:number=0;
  let quantidade: number = 0;
  let total: number = 0;
  let totalgeral: number = 0;
  let media: number = 0;

  while (preco != 0) {
    
    preco = Number(
      prompt(
        "Qual o preço unitario da peça(Lá ela)?Informe preço zero para sair do programa",
      ),
    );
    if(preco == 0){
       break;
    }
    quantidade = Number(
      prompt("Qual a quantidade de produtos que vc está levando?"),
    );
    function recebe_preco(): any {
      if (quantidade > 10) {
        preco = preco - (0.05 * preco);
        precos += preco;
        precoquantidade++;
        return total = quantidade * preco;
      }
    }
    recebe_preco()
    totalgeral += total;
    media = precos/precoquantidade ;
    alert(totalgeral)
    alert(precos)
    alert(media)
  }

}
const btn = document.getElementById("btn-f8");

btn?.addEventListener("click", exercicio_08);