// Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. 
// Ela quer que você possa adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// Permitir que o usuário adicione itens à lista(array) até que ele digite "fim".
// Permitir que o usuário apresente todos os itens da lista.
// Permitir que o usuário apresente quantos itens há na lista.
// Permitir que o usuário remova itens da lista.

export function exercicio_03(): void {
    function gerar_lista_compras(): any {
        while (itens != "fim") {
            itens = String(prompt(`Adicione itens a lista ou digite [-1] para encerrar a lista: `))
            if (itens == "-1") {
                break
            } else {
                lista_Itens[lista_Itens.length] = itens
                quantidade[quantidade.length] = Number(prompt(`Informe a quantidade de ${itens} na lista: `))
            }
        }

    }
    let itens: string = ``, lista_Itens: string[] = [], quantidade:number[]= [], remocao:number = 0
    gerar_lista_compras()
    console.log(`Mostrando lista atual: ${lista_Itens}`)
    while (remocao != -1){
        
        remocao = Number(prompt(`Informe a posição do item que deseja excluir ou [-1] se não deseja excluir nada:`))
        if (isNaN(remocao)){
            remocao = Number(prompt(`Por favor Informe o número da posição do item que deseja excluir ou [-1] se não deseja excluir nada:`))
        }else{
        if (remocao == -1){
            break
        }
        
        lista_Itens.splice(remocao-1, 1)
        quantidade.splice(remocao-1,1)
        console.log(`Mostrando lista atual: ${lista_Itens}`)
    }
    }
    console.log(`Mostrando a lista`)
    for (let i:number = 0; i <= lista_Itens.length-1;i++){
        console.log(`${lista_Itens[i]}: ${quantidade[i]} Un.`)
    }
}

const btn = document.getElementById("btn-b3");

btn?.addEventListener("click", exercicio_03);