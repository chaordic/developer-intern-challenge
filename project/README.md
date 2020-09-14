## Alteração de Valores

Para a alteração dos valores do Banco de Dados (usuário, host, senha, etc), vá até `Back.js`.

Para a alteração da URL encurtada, vá até `Back.js`, e mude `url_shorter`.

## Comandos para inicialização do projeto

No diretório 'project', você precisa digitar:

### `npm install`

### `npm start`

Após isso, entre no diretório 'src', e execute o seguinte comando:

### `node Back.js`

Para que assim, o back-end seja inicializado também.

O font-end está na porta 3000, já o back-end na porta 3030.

Como as portas estão já pré-definidas, a criação dos links encurtados também estão. Caso deseja mudar, você pode ir até `Back.js`, e ir ao final da página para mudar a porta.

Após isso, vá até o diretório `paginas`, e dentro dele, abra `ShortenLinks`, e mude a porta para qual você mudou anteriormente. Faça esse mesmo processo em `Top` e `Hits`.

Quando iniciar o projeto, um link será gerado automaticamente, e ele irá redirecionar ao site da Google.

## Links com formatação em JSON

Você acessar o `localhost:3030/links`, onde irá mostrar todos os 5 primeiros links com mais hits. Lá é mostrado o `id`, `hits`, `url`, `shortUrl` e `code`.

## Dependências utilizadas

* Axios
* Cors
* Express
* HTTP
* MySQL
* React
* React-Dom
* Valid-Url