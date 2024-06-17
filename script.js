
//Quantidade de Produtos Para Cadastrar

const quantidadeDeProduto = Number(prompt("Digite Quantidade De Produto Que Deseija Cadastrar")
);

//Laço de Repetição Com Nome do Produto,Undidade Do Produto é Peço
for (let i = -0; i < quantidadeDeProduto; i++) {
  const Estoque = [
    {
      NomeDoProduto: prompt("Digite O nome Do Produto"),
      Unidade: prompt("Quantas Unidade:"),
      Preço: prompt("Preço"),
    },
  ];

  console.log(Estoque);
}
//Menu com Opções 
const lista=prompt(`
        1.Lista De Tosdos Os Produtos
        2.Adicionar Estoque A Um Produto 
        3.Vender Um Produto 
        4.Mostar o PRODUTO mais Caro 
        5.Mostra o Produto mais Barato. 
        6.Mostrar a Quantidade Total De Itens em Estoque 
        7.Sair`)

