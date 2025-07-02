### **Artigo Técnico: Desenvolvimento de um Sistema de Gerenciamento de Produtos com Arquitetura Cliente-Servidor**

Acadêmico: Tales Emanuel Bessa Santos
Turma: FLD207825CET 
Tutor: Adriana Reis

---

#### **Resumo**

Este artigo detalha o projeto e a implementação de um sistema de Cadastro, Leitura, Atualização e Exclusão (CRUD) para o gerenciamento de produtos. A aplicação foi desenvolvida utilizando uma arquitetura cliente-servidor desacoplada, com um frontend reativo construído com HTML, CSS e JavaScript puro, e um backend robusto baseado em Node.js e Express, com um banco de dados relacional MySQL. O objetivo principal foi criar uma solução eficiente, de fácil manutenção e escalável, que servisse como um sistema fundamental para qualquer cenário de controle de inventário. O trabalho aborda a arquitetura do sistema, as tecnologias empregadas, os desafios enfrentados e as melhorias implementadas, como a otimização da gestão de conexões com o banco de dados e a melhoria da experiência do usuário (UX) através de feedback visual dinâmico.

**Palavras-chave:** CRUD, Node.js, Express, MySQL, JavaScript, Arquitetura Cliente-Servidor, API RESTful.

---

#### **1. Introdução**

A necessidade de gerenciar dados de forma eficiente é um pilar central em inúmeras aplicações de software, desde pequenos sistemas de controle de estoque até grandes plataformas de e-commerce. A operação fundamental por trás desses sistemas é o CRUD, que permite a manipulação completa dos registros de dados.

Este projeto foca na criação de uma aplicação web completa para o cadastro de produtos. A solução foi projetada para ser simples, mas demonstrando conceitos essenciais de desenvolvimento web moderno, como a separação de responsabilidades entre o frontend (interface do usuário) e o backend (lógica de negócio e acesso a dados), comunicando-se através de uma API RESTful.

---

#### **2. Arquitetura do Sistema**

A aplicação segue uma arquitetura cliente-servidor de duas camadas, conforme descrito abaixo (Figura 1).

**Figura 1: Diagrama da Arquitetura do Sistema**

```
+----------------+      HTTP/JSON      +-------------------+      SQL      +-------------+
|                | <----------------> |                   | <-----------> |             |
|   Cliente      |      (API REST)    |     Servidor      |   (Pool de    |  Banco de   |
|  (Navegador)   |                    |    (Node.js)      |   Conexões)   |    Dados    |
|                |                    |                   |               |   (MySQL)   |
+----------------+                    +-------------------+               +-------------+
- HTML/CSS/JS                         - Express.js
- Lógica de UI                        - Lógica de Negócio
- Requisições Fetch                   - Endpoints da API
```

*   **Cliente (Frontend):** Uma interface de usuário (UI) renderizada no navegador, construída com HTML semântico, CSS para estilização e JavaScript para interatividade. É responsável por exibir o formulário de cadastro e a lista de produtos, capturar as entradas do usuário e realizar requisições assíncronas (`Fetch API`) para o servidor.

*   **Servidor (Backend):** Uma API RESTful desenvolvida em Node.js com o framework Express.js. É responsável por:
    *   Expor endpoints (ex: `/produtos`) para as operações CRUD.
    *   Processar e validar os dados recebidos do cliente.
    *   Interagir com o banco de dados MySQL para persistir e recuperar os dados.
    *   Retornar respostas no formato JSON para o cliente.

*   **Banco de Dados:** Um banco de dados relacional MySQL, utilizado para armazenar os dados dos produtos de forma estruturada e persistente. A tabela `produtos` contém colunas como `id`, `nome`, `descricao`, `preco` e `categoria`.

---

#### **3. Tecnologias Utilizadas**

*   **Frontend:**
    *   **HTML5:** Para a estruturação semântica do conteúdo.
    *   **CSS3:** Para a estilização e responsividade da interface.
    *   **JavaScript (ES6+):** Para a manipulação do DOM, interatividade e comunicação assíncrona com o backend via `Fetch API`.

*   **Backend:**
    *   **Node.js:** Ambiente de execução para o JavaScript no lado do servidor.
    *   **Express.js:** Framework minimalista para a criação da API RESTful, gerenciamento de rotas e middlewares.
    *   **mysql2/promise:** Driver para a comunicação com o banco de dados MySQL, utilizando Promises para um código assíncrono mais limpo.
    *   **CORS:** Middleware para habilitar o compartilhamento de recursos entre origens distintas (cliente e servidor).

*   **Banco de Dados:**
    *   **MySQL:** Sistema de Gerenciamento de Banco de Dados (SGBD) relacional.

---

#### **4. Implementação e Funcionalidades**

O sistema implementa as seguintes funcionalidades principais:

1.  **Cadastro de Produtos (Create):** Um formulário permite ao usuário inserir nome, descrição, preço e categoria de um novo produto. Ao submeter, uma requisição `POST` é enviada para o endpoint `/produtos`. O backend valida os dados (verificando campos obrigatórios e preços não negativos) e os insere no banco de dados.

2.  **Listagem de Produtos (Read):** Ao carregar a página, uma requisição `GET` é feita ao endpoint `/produtos`. O backend consulta todos os produtos no banco de dados e os retorna como um array de objetos JSON, que é então renderizado em uma tabela na interface.

3.  **Exclusão de Produtos (Delete):** Cada produto na lista possui um botão "Excluir". Ao ser clicado, uma requisição `DELETE` é enviada para `/produtos/:id`, onde `:id` é o identificador do produto. O backend executa o comando de exclusão no banco de dados.

4.  **Feedback ao Usuário:** Para melhorar a experiência do usuário (UX), foram implementadas notificações visuais dinâmicas. Em vez de `alert()` nativos do navegador, mensagens de sucesso ou erro são exibidas em um elemento dedicado na página, fornecendo um feedback claro e não intrusivo sobre o resultado das operações.

5.  **Gestão de Conexão Otimizada:** No backend, a gestão de conexões com o MySQL foi otimizada substituindo a criação de uma nova conexão a cada requisição por um **pool de conexões**. Esta abordagem reutiliza conexões abertas, reduzindo a latência e o consumo de recursos do servidor e do banco de dados, tornando a aplicação mais performática e robusta sob carga.

---

#### **5. Desafios e Soluções**

*   **Desafio:** Gerenciamento ineficiente de conexões com o banco de dados.
    *   **Solução:** Implementação de um pool de conexões (`mysql.createPool`), que melhorou significativamente a performance e a escalabilidade do backend.

*   **Desafio:** Experiência do usuário pobre devido ao uso de `alert()`.
    *   **Solução:** Criação de um sistema de feedback visual integrado à UI, que exibe mensagens contextuais de forma elegante e temporizada.

*   **Desafio:** Falta de uma rota para exclusão no backend.
    *   **Solução:** Implementação do endpoint `DELETE /produtos/:id`, completando o ciclo CRUD da aplicação.

---

#### **6. Trabalhos Futuros**

A aplicação atual serve como uma base sólida, mas pode ser estendida com diversas funcionalidades:

1.  **Implementação da Edição (Update):** Adicionar a funcionalidade de edição, que tipicamente envolve abrir um modal ou uma nova página com os dados do produto para alteração e enviar uma requisição `PUT` ou `PATCH`.
2.  **Paginação:** Para listas de produtos muito grandes, implementar paginação no backend e controles no frontend para melhorar a performance.
3.  **Busca e Filtros:** Adicionar um campo de busca e filtros (ex: por categoria) para facilitar a localização de produtos.
4.  **Autenticação de Usuários:** Proteger a API com um sistema de login para que apenas usuários autorizados possam gerenciar os produtos.
5.  **Conteinerização:** Empacotar a aplicação (backend e banco de dados) usando Docker para simplificar o deploy e garantir a consistência entre ambientes.

---

#### **7. Conclusão**

Este projeto demonstrou com sucesso a construção de uma aplicação web full-stack funcional e bem-estruturada. Através da utilização de tecnologias modernas e da aplicação de boas práticas de desenvolvimento, como a arquitetura cliente-servidor e a otimização de recursos, foi possível criar um sistema de gerenciamento de produtos que é, ao mesmo tempo, simples em seu escopo e robusto em sua fundação técnica. As melhorias implementadas não apenas aprimoraram a aplicação existente, mas também estabeleceram um caminho claro para futuras expansões e aprimoramentos.


---

#### ** Repositorio** 

https://github.com/taleshow/cadastrodeprodutos