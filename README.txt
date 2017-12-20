******************************************
*										 *
* Projeto: SPA (Single-Page Application) *
*										 *
******************************************

Objetivos:
	- Buscar em uma API pública (https://developer.marvel.com/docs#!/public/), informações para popular uma página;
	- Desta página, entitulada "Galeria de Heróis", constarão os heróis da Marvel (c), que serão dispostos em forma de um "grid";
	- Clicando-se em qualquer item populado no grid, abre-se um card (popup), no qual serão apresentadas informações detalhadas sobre o herói clicado.
	
Arquitetura:
	- Para esta solução, optei por empregar somente HTML / CSS3 / Javascript + JQuery.
	- O js/jQ foram empregados para criar elementos e inserí-los dinamicamente no DOM.
	- A folha de estilos e o jQ foram utilizados para dar apoio ao layout dos elementos e também proporcionar efeitos de transição.
	- Os componentes foram segmentados cada um em sua própria estrutura:
		- Arquivo 'index.html' para a página;
		- Pasta '/img' para as imagens;
		- Pasta 'css/base.css' para a folha de estilos;
		- Pasta 'js/index.js' para o código da página.
	
Funcionamento:
	Para que se obtenha os resultados esperados, a API pública requer que um conjunto de parâmetros sejam passados na querystring:
		- Chave pública e chave privada (obteníveis através de cadastro no site da Marvel);
		- Hash MD5 (calculado a partir das chaves acima)
	Estes parâmetros são utilizados na chamada AJAX feita a partir do js, para obter os dados que irão popular o grid e preencher o card.
	Eu deixei esses parâmetros em "hard-code" dentro do próprio arquivo index.js, caso necessário, pode-se alterá-los nas variáveis globais.
	
	Com isso, a página index.html já carrega o grid e já se pode clicar em qualquer item para que o card seja preenchido com os detalhes correspondentes.
	O card pode ser fechado, clicando-se no ícone "X" posicionado acima e à direita do card. Mas não é necessário fechar-se o card, para que este se atualize ao clicar em outro item.