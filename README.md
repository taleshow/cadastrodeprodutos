# Sistema de Cadastro de Produtos

![Badge de Licença](https://img.shields.io/badge/license-MIT-blue.svg)![Badge de Tecnologia](https://img.shields.io/badge/frontend-JS%20%7C%20HTML%20%7C%20CSS-orange)![Badge de Tecnologia](https://img.shields.io/badge/backend-Node.js%20%7C%20Express-green)![Badge de Tecnologia](https://img.shields.io/badge/database-MySQL-blue)

Um projeto de aplicação web Full-Stack simples para demonstrar um sistema CRUD (Create, Read, Update, Delete) completo. A aplicação permite cadastrar, visualizar e excluir produtos, utilizando uma arquitetura moderna com frontend desacoplado e um backend servindo uma API RESTful.

  
*Substitua o link acima por um GIF ou screenshot da sua aplicação em funcionamento.*

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Arquitetura](#-arquitetura)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
  - [Instalação e Execução](#instalação-e-execução)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Endpoints da API](#-endpoints-da-api)
- [Próximos Passos](#-próximos-passos)
- [Licença](#-licença)

## ✨ Funcionalidades

- **Cadastrar Produtos:** Adicionar novos produtos através de um formulário simples.
- **Listar Produtos:** Visualizar todos os produtos cadastrados em uma tabela.
- **Excluir Produtos:** Remover produtos da lista e do banco de dados.
- **Feedback Visual:** Notificações dinâmicas para o usuário sobre o resultado das operações (sucesso ou erro).
- **Validação de Dados:** Validações no frontend (HTML) e no backend para garantir a integridade dos dados.

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura Cliente-Servidor:

- **Frontend (Cliente):** Uma interface de usuário estática (HTML, CSS, JS) que é executada no navegador. Ela consome a API do backend para manipular os dados.
- **Backend (Servidor):** Uma API RESTful construída com Node.js e Express, responsável pela lógica de negócio e pela comunicação com o banco de dados MySQL.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Fetch API para requisições assíncronas

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/pt-br/)
  - [mysql2](https://github.com/sidorares/node-mysql2) (com suporte a Promises e Pool de Conexões)
  - [CORS](https://www.npmjs.com/package/cors)

- **Banco de Dados:**
  - [MySQL](https://www.mysql.com/)

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/downloads/) instalado e em execução.
- Um cliente de banco de dados como [MySQL Workbench](https://www.mysql.com/products/workbench/) ou DBeaver (opcional, mas recomendado).

### Configuração do Banco de Dados

1.  Acesse seu cliente MySQL e crie um novo banco de dados:
    ```sql
    CREATE DATABASE cadastro_produtos;
    ```

2.  Crie um usuário e conceda as permissões necessárias (substitua `'sua_senha'` por uma senha segura):
    ```sql
    CREATE USER 'cadastro_produtos'@'localhost' IDENTIFIED BY '123456';
    GRANT ALL PRIVILEGES ON cadastro_produtos.* TO 'cadastro_produtos'@'localhost';
    FLUSH PRIVILEGES;
    ```

3.  Crie a tabela `produtos` dentro do banco de dados `cadastro_produtos`:
    ```sql
    USE cadastro_produtos;

    CREATE TABLE produtos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao TEXT,
      preco DECIMAL(10, 2) NOT NULL,
      categoria VARCHAR(100),
      data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/taleshow/cadastrodeprodutos.git
    cd seu-repositorio
    ```

2.  **Instale as dependências do backend:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor backend:**
    ```bash
    node server.js
    ```
    O servidor estará rodando em `http://localhost:3001`.

4.  **Abra o frontend:**
    Não há um passo de build para o frontend. Basta abrir o arquivo `index.html` diretamente em seu navegador.

Pronto! A aplicação deve estar funcionando, conectando-se ao seu servidor local.

## 📁 Estrutura de Arquivos

```
.
├── index.html         # Estrutura da página principal (Frontend)
├── style.css          # Estilos da aplicação (Frontend)
├── script.js          # Lógica do cliente e chamadas à API (Frontend)
├── server.js          # Lógica do servidor e endpoints da API (Backend)
├── package.json       # Dependências e scripts do Node.js
└── README.md          # Este arquivo
```

## 🌐 Endpoints da API

A API do backend expõe os seguintes endpoints:

| Método | Rota             | Descrição                      |
| :----- | :--------------- | :----------------------------- |
| `GET`  | `/produtos`      | Retorna a lista de todos os produtos. |
| `POST` | `/produtos`      | Cria um novo produto.          |
| `DELETE`| `/produtos/:id`  | Exclui um produto pelo seu ID. |

## 🔮 Próximos Passos

Este projeto pode ser expandido com as seguintes funcionalidades:

- [ ] Implementar a funcionalidade de **Editar (Update)**.
- [ ] Adicionar **paginação** para lidar com grandes volumes de dados.
- [ ] Criar um campo de **busca e filtros** por categoria.
- [ ] Implementar **autenticação** de usuários (JWT).
- [ ] **Conteinerizar** a aplicação com Docker.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Tales Emanuel](https://github.com/taleshow).
