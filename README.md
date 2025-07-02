CADASTRO DE PRODUTO

Acadêmico: Tales emanuel bessa santos
Turma: FLD207825CET 
Tutor: Adriana Reis


RESUMO 

Este trabalho aborda o desenvolvimento de um sistema de cadastro de produtos para uma loja de bebidas, com o objetivo de criar uma ferramenta eficiente e fácil de usar para gerenciar os produtos. A metodologia adotada consistiu na criação de um formulário de cadastro em HTML, estilizado com CSS, e na implementação de funcionalidades em JavaScript para adicionar e exibir os produtos cadastrados. Os resultados mostram que o sistema é capaz de armazenar e exibir os produtos de forma clara e organizada, facilitando a gestão dos produtos pela loja. As conclusões indicam que a utilização de tecnologias web pode ser uma solução eficaz para o gerenciamento de produtos em pequenas e médias empresas. Palavras-chave: Sistema de Cadastro, Gerenciamento de Produtos, Tecnologias Web.


INTRODUÇÃO 


A gestão eficiente de produtos é fundamental para o sucesso de qualquer empresa, especialmente em setores competitivos como o de bebidas. Com o avanço da tecnologia, é possível criar sistemas de gerenciamento de produtos que sejam eficientes e fáceis de usar. Nesse contexto, este trabalho busca responder à seguinte pergunta: Como criar um sistema de cadastro de produtos que seja eficaz e fácil de usar para uma loja de bebidas? O objetivo geral deste trabalho é desenvolver um sistema de cadastro de produtos que permita à loja de bebidas gerenciar seus produtos de forma eficiente. Os objetivos específicos incluem criar um formulário de cadastro em HTML, implementar funcionalidades em JavaScript para adicionar e exibir os produtos cadastrados e avaliar a eficácia do sistema desenvolvido.




FUNDAMENTAÇÃO TEÓRICA 

ESSA PARTE DO CODICO É EM HTML.

O conteúdo dentro da tag <title> define o titulo da pagina que aparece na barra de titulo do navegador ou na aba da guia.
Essa tag <div> é um elemento de divisão genérico que é frenguentimente usado para agrupar e organizar outros elementos HTML. Já o atributo class=”contanier” é um nome de classe que pode ser usado no arquivo css.


. Nessa campo <label for="nome">Nome do Produto:</label> este e um tótulo  associado ao campo de entrada com id=”nome” o texto “nome do produto” será exibido ao usuário.
. <input type="text" id="nome" required> este é um campo de entrada de texto onde o usurio digitara o nome do produto, o id=”nome” o associa ao totulo. A propriedade required indica que este campo não pode ser deixado em branco.
. <label for="descricao">Descrição do Produto:</label> aqui é o rotulo para o campo de descrição.
. <textarea id="descricao" required></textarea> esta é uma de texto usada para entradas de texto longas como a descrição do produto. O id=”descrição “ a associa ao rotulo e required indica que é um campo obrigatório. 
. <label for="preco">Preço do Produto:</label>  rotulo para campo de preço.
. <input type="number" id="preco" required> este campo é de entrada para números, ideal para o preço. O id=”preco” o associa ao rotulo  e required o torna obrigatório. 
. <label for="categoria">Categoria do Produto:</label> rotulo para a seleção de categoria.
. <select id="categoria" required> esse elemento cria uma lista suspensa para que o usuário selecione uma categoria. O id=”categoria” o associa ao rotulo e requerid torna a seleção obrigatória.
. <option value="">Selecione uma categoria</option> esta é opção padrão que aparece inicialmente. Ela tem um value vazio, o que geralmente indica que nenhuma opção valida foi selecionada.
. <option value="refrigerante">Refrigerante</option> uma opção para refrigerante quando selecionada , o valor “refrigerante” será enviado com o formulário. 

ESSA SEGUNDA PARTE É NO STYLO CSS






ESSA TERCEIRA PARTE É EM JAVASCRIPT

 

Esta é a declaração de uma variável em javascript
Este código esta confugurando o formulário com o ID”form-cadastro” para que, quando ele for submetido, o comportamento padrão de recarregar a pagina seja impedido, isso permite que o desenvolvedor execute seu próprio código javascript para lidar com os dados do formulário, como validação ou envio para um servidor via javascrip.


Esse bloco de código está coletando os dados inseridos ou selecionados pelo usuário nos diferentes campo do formulário de cadastro de produtos e armazenando-os em constante separadas para posterior manipulação.
Este código parece estar sendo executado após alguma operação (como envio de um formulário de cadastro de produto), onde ele atualiza a lista de produtos exibida e limpa o formulário para uma nova entrada.


Esta função busca um elemente na pagina, limpa  seu conteúdo, e então itera sobre uma coleção de produtos para criar e adicionar novos elementos<li> com os detalhes de cada produto, efetivamente atualizando a exibição da lista de produtos na interface do usuário . 


METODOLOGIA 

A metodologia adotada neste trabalho consistiu em uma pesquisa de desenvolvimento de software, com uma abordagem qualitativa e quantitativa. A pesquisa foi realizada utilizando o método de desenvolvimento de software, com foco na criação de uma aplicação web para cadastro de produtos.
Tipo de pesquisa:
- Desenvolvimento de software: A pesquisa foi realizada com o objetivo de desenvolver uma aplicação web para cadastro de produtos, utilizando tecnologias web avançadas.
- Estudo de caso: A pesquisa também pode ser considerada um estudo de caso, pois foi realizada em um contexto específico (loja de bebidas) e teve como objetivo desenvolver uma solução para um problema real.
Instrumentais de pesquisa:
- Análise de requisitos: Foi realizada uma análise de requisitos para entender as necessidades da loja de bebidas e definir os requisitos da aplicação.
- Desenvolvimento de protótipos: Foram desenvolvidos protótipos da aplicação para testar e validar as funcionalidades e a interface.
- Testes: Foram realizados testes para garantir que a aplicação funcionasse corretamente e atendesse aos requisitos.
Fonte das informações:
- Revisão bibliográfica: Foi realizada uma revisão bibliográfica sobre desenvolvimento de software e tecnologias web para entender as melhores práticas e tendências atuais.
- Análise de documentos: Foram analisados documentos relacionados à loja de bebidas para entender suas necessidades e requisitos.
- Desenvolvimento da aplicação: A aplicação foi desenvolvida utilizando tecnologias web avançadas, incluindo HTML, CSS e JavaScript.

CONSIDERAÇÕES 

A realização deste trabalho foi uma experiência valiosa que permitiu aprender sobre desenvolvimento de software e tecnologias web. A aplicação desenvolvida demonstrou ser uma ferramenta eficaz para gerenciar produtos e melhorar a experiência do usuário. Espero que este trabalho possa servir como base para futuros projetos e pesquisas.

Essa conclusão resume as principais descobertas e aprendizados do trabalho, destacando a importância da análise de requisitos, da utilização de tecnologias web avançadas e da realização de testes. Além disso, destaca a experiência valiosa que foi realizar este trabalho e a possibilidade de aplicar os conhecimentos adquiridos em futuros projetos e pesquisas. 

REFERÊNCIAS BIBLIOGRÁFICAS 

	www.w3schools.com 
	https://www.uniasselvi.com.br/extranet/layout/request/trilha/materiais/livro/livro.php?codigo=575353
	https://www.uniasselvi.com.br/extranet/layout/request/trilha/materiais/livro/livro.php?codigo=24577 

