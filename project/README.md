# Encurtador de URL

Olá! Este é um guia rápido de instalação e execução do programa proposto no desafio. 

## Baixar, instalar e rodar!

O processo todo é muito simples, precisamos baixar o git, trocar para a branch correta e instalar as bibliotecas usando `npm i` no front e no back-end.


    git clone https://github.com/higorfreire217/developer-intern-challenge.git
    cd /developer-intern-challenge
    git checkout higor-freire


Pronto, agora precisamos instalar as dependências dos projetos

    cd rest
    npm i
    cd ../front/
    npm i
    cd ..

Agora basta executar os projetos, primeiro o back-end

    cd rest
    node server.js

Depois o Front-End (você precisara de mais uma janela do terminal)

    cd front
    npm start

Pronto. agora o endereço `localhost:3000` está pronto para ser acessado!


# Estrutura do projeto

Reservei esta parte para explicar a estrutura do projeto e deixar claro o papel de cada diretorio e documento.

## Back-End

O Back-end foi desenvolvido em **Node.js** utilizando servidor **express**.
Para facilitar a comunicação com o banco de dados e impedir que uma simples migração de tipo banco de dados relacional (Mysql para Postgree por exemplo) seja uma possível dor de cabeça, estou utilizando a biblioteca **Sequelize** que cria uma estrutura ORM completa.

    \rest
        +---data
        +---models
        \---routes
No diretório **data** está o arquivo do banco de dados SQLite e o mock para gerar os primeiros dados.
Em **models** esta o modelo Url, este documento cria a tabela no banco de dados registra os primeiros dados usando um mock em **.json**
Ja no diretório **routes** se encontra o arquivo **api.js**, ele é responsável por receber as requisições HTTP e trata-las devidamente.

As End-points disponíveis são

|Metodo|End-point|Descrição
|--|--|--|
| GET | / | Retorna 5 links mais clicados
| GET | /:shortCode | Retorna url correspondente
| POST | / | Requer objeto { url:"www.site.com" }
| DELETE | /:shortCode | Delete url com respectiva shortCode
| GET | /hits | Retorna soma dos cliques

## Front-End

A Estrutura do Front-End é menos complexa, e foi usado como biblioteca um interpretador **SASS**, a biblioteca **MaterializeCSS** e outras que fazem parte do eco-sistema do **React.js**

    \front
        +---src
	        +---assets
	        \---components
Esta estrutura é referente aos arquivos do projeto, demais diretórios foram suprimidos pois fazem parte da configuração padrão do **create-react-app**.
O diretório **src** refere-se aos documentos do projeto, dentro dele há o componente principal, o **App.js** que carrega os demais componentes que estão dentro do diretório **components**.

Cada seção da single-page foi transformada em uma seção, organizadas da seguinte forma:

    \components
		+---Header.js
		+---Splash.js
		+---TopFive.js
		+---Hits.js
		+---Footer.js
**Header.js** trata-se do cabeçalho com a Logo.
**Splash.js** trata-se da tela principal com o encurtador.
**TopFive.js** apresenta os 5 links mais clicados.
**Hits.js** Conta o numero total de cliques.
**Footer.js** Trata-se do rodape da aplicação.
