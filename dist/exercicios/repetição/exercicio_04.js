// Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
// Função classificarVenda(valor):
// Se valor < 1000: Retorna "Bronze"
// Se valor entre 1000 e 5000: Retorna "Prata"
// Se valor > 5000: Retorna "Ouro"
// O Programa:
// Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// Dentro do laço, chame a função de classificação.
// Ao final, o programa deve exibir:
// O total de vendas da equipe (soma).
// Quem foi o vendedor com a maior venda (maior valor digitado).
// Quantos vendedores atingiram a categoria "Ouro".
export function exercicio_04() {
    let total_vendas = 0;
    let maior_venda = 0;
    let nome_maior = "";
    let qtd_ouro = 0;
    // função de classificação
    function classificarVenda(valor) {
        if (valor < 1000) {
            return "Bronze";
        }
        else if (valor <= 5000) {
            return "Prata";
        }
        else {
            return "Ouro";
        }
    }
    // loop dos 5 vendedores
    for (let i = 0; i < 5; i++) {
        let nome = String(prompt("Informe o nome do vendedor:"));
        let valor = Number(prompt("Informe o valor da venda:"));
        // somar total
        total_vendas += valor;
        // verificar maior venda
        if (valor > maior_venda) {
            maior_venda = valor;
            nome_maior = nome;
        }
        // classificar venda
        let categoria = classificarVenda(valor);
        // contar quantos são ouro
        if (categoria === "Ouro") {
            qtd_ouro++;
        }
    }
    // resultados finais
    console.log("Total de vendas: " + total_vendas);
    console.log("Maior venda: " + maior_venda + " feita por " + nome_maior);
    console.log("Quantidade de vendedores Ouro: " + qtd_ouro);
    alert("Total de vendas: " + total_vendas);
    alert("Maior venda: " + maior_venda + " feita por " + nome_maior);
    alert("Quantidade de vendedores Ouro: " + qtd_ouro);
}
const btn = document.getElementById("btn-2");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", exercicio_04);
