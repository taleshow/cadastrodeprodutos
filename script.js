const API_URL = 'http://localhost:3001/produtos';

// --- NOVA FUNÇÃO: Para exibir feedback na tela ---
function mostrarFeedback(mensagem, tipo = 'sucesso' ) {
  const feedbackDiv = document.getElementById('mensagem-feedback');
  feedbackDiv.textContent = mensagem;
  feedbackDiv.className = tipo; // Adiciona a classe 'sucesso' ou 'erro'

  // Esconde a mensagem após 4 segundos
  setTimeout(() => {
    feedbackDiv.className = '';
  }, 4000);
}

// Carrega os produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarProdutos);

// Função para carregar produtos do banco de dados
async function carregarProdutos() {
  const tbody = document.getElementById('lista-produtos');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Carregando...</td></tr>';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Não foi possível carregar os produtos. Verifique se o servidor está rodando.');
    }
    const produtos = await response.json();
    atualizarListaProdutos(produtos);
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    mostrarFeedback(error.message, 'erro');
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: red;">${error.message}</td></tr>`;
  }
}

// Função para atualizar a lista de produtos na tabela
function atualizarListaProdutos(produtos) {
  const tbody = document.getElementById('lista-produtos');
  tbody.innerHTML = '';

  if (produtos.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Nenhum produto cadastrado</td></tr>';
    return;
  }

  produtos.forEach(produto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.descricao}</td>
      <td>R$ ${Number(produto.preco).toFixed(2)}</td>
      <td>${produto.categoria}</td>
      <td>
        <button class="btn-editar" data-id="${produto.id}">Editar</button>
        <button class="btn-excluir" data-id="${produto.id}">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Adiciona eventos aos botões de ação
  document.querySelectorAll('.btn-editar').forEach(btn => {
    btn.addEventListener('click', (e) => editarProduto(e.target.dataset.id));
  });
  
  document.querySelectorAll('.btn-excluir').forEach(btn => {
    btn.addEventListener('click', (e) => excluirProduto(e.target.dataset.id));
  });
}

// Função para cadastrar novo produto
document.getElementById("form-cadastro").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const produto = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,
    preco: document.getElementById("preco").value, // Enviamos como string, o backend converte
    categoria: document.getElementById("categoria").value
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro desconhecido ao cadastrar produto');
    }
    
    document.getElementById("form-cadastro").reset();
    mostrarFeedback('Produto cadastrado com sucesso!', 'sucesso');
    carregarProdutos(); // Recarrega a lista de produtos
    
  } catch (error) {
    console.error('Erro no cadastro:', error);
    mostrarFeedback(error.message, 'erro');
  }
});

// Função para excluir produto
async function excluirProduto(id) {
  if (!confirm('Tem certeza que deseja excluir este produto?')) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro ao excluir produto');
    }
    
    mostrarFeedback('Produto excluído com sucesso!', 'sucesso');
    carregarProdutos(); // Recarrega a lista após exclusão

  } catch (error) {
    console.error('Erro na exclusão:', error);
    mostrarFeedback(error.message, 'erro');
  }
}

// Função de edição (ainda a ser implementada)
function editarProduto(id) {
  mostrarFeedback(`Função de editar para o produto ID ${id} ainda não implementada.`, 'erro');
  // Aqui você implementaria a lógica de edição, como abrir um modal com os dados do produto.
}
