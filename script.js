//Declara uma variável para armazenar a lista de produtos.
let produtos = [];

//Adiciona um evento de submissão ao formulário, que é acionado quando o botão de submissão é clicado.
document.getElementById("form-cadastro").addEventListener("submit", (e) => {
  e.preventDefault();
  //Obtém o valor do campo de nome do produto.
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const preco = document.getElementById("preco").value;
  const categoria = document.getElementById("categoria").value;

  //Cria um objeto para representar o produto, com propriedades para nome, descrição, preço e categoria.
  const produto = {
    nome,
    descricao,
    preco,
    categoria,
  };

  //Adiciona o produto à lista de produtos.
  produtos.push(produto);
  //Chama a função para atualizar a lista de produtos na página.
  atualizarListaProdutos();
  document.getElementById("form-cadastro").reset();
});

//Define a função para atualizar a lista de produtos, que limpa a lista atual e adiciona os produtos da lista de produtos.
function atualizarListaProdutos() {
  const listaProdutos = document.getElementById("lista-produtos");
  listaProdutos.innerHTML = "";
  produtos.forEach((produto) => {
    const li = document.createElement("li");
    li.textContent = `${produto.nome} - R$ ${produto.preco} - ${produto.categoria}`;
    listaProdutos.appendChild(li);
  });
}