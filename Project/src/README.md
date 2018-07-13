Comentários e detalhes da instalação em:

https://docs.google.com/document/d/1V1bVybTDU6KzAA01-U2HTSEC7GG9Rh5-j5NzaopJ5fI/edit?usp=sharing

Introdução

O desafio foi executado usando a plataforma Vue.JS para o frontend, em conjunto com PHP e MySQL, sendo estes últimos para o backend. Foi usado também o módulo WebPack para iniciar o Vue.
O projeto roda a partir do Node.JS e depende de uma base de dados MySQL e de um servidor capaz de executar PHP. Localmente, optei por rodar uma instância do XAMPP em conjunto com o Node.JS, pois tive problemas em utilizar executar MySQL e PHP através do Node.JS. Mas é possível executar a aplicação somente através do Node.JS.
A execução se dá com o envio do link para o arquivo “API.php”. Esse envio é feito através do VueJS, que aguarda a resposta do servidor e atualiza o link sem atualizar a página.
Ao receber o link, o arquivo “API.php” trata o input e verifica se o link é válido. Caso seja, procede para a codificação e inserção deste na base de dados.
O encurtamento é feito usando uma função hash (Adler32), e funciona ao associar cada link a um ID único. A este ID, são atribuídos: o link original, o link encurtado; o número de acessos.
Ao receber um link válido, através do metodo POST, a api retorna o URL encurtado, que é então exibido na página.
Complementando a funcionalidade da aplicação, estão os arquivos “top5.php” e “totalhits.php”, responsáveis por retornar os 5 links mais acessados, e a soma de acessos a todos os links, respectivamente. Tais arquivos são requisitados através do Vuejs.
Além destes, a aplicação conta com uma função de redirecionamento. Esta é acionada através de um arquivo “.htaccess”, que detecta a entrada do usuário, e redireciona esta entrada para o arquivo “redirect.php”. Ao receber uma entrada ShortURL válida, o programa associa a entrada ao seu ID, busca o banco de dados pelo URL correspondente a esse ID, incrementa o número de hits, e faz o redirecionamento ao site correspondente.

O layout da página se encontra no arquivo “App.vue”. Neste também estão as funções que acionam a aplicação, e o Stylesheet em CSS. Neste arquivo, se encontram as funções em JavaScript: 
SendURL - Inicia uma requisição ao API.PHP com o url inserido, e envia a resposta para:
ChangeURL - Faz a transição na página do URL inserido para o URL curto gerado.
NewURL - Acionada no momento que o usuário clica em “x”. Exibe novamente o campo de entrada para receber um novo URL.
GetData - Acessa os arquivos “top5.php” e “totalhits.php”, recebe as respostas, e as envia para: ShowData - Exibe na página as respostas do servidor, e atualiza a cada 2 segundos a quantidade total de hits.

Instalação

Abrir o Command Line do NodeJS
Navegar para o diretório que deseja instalar com o comando:
cd “diretorio”
Executar os comandos:
npm install vue
vue init webpack “nome do projeto”
Selecionar “não” para as opções informadas, e instalar com o compilador.
Navegar ao diretório instalado, e substituir a pasta “src” pela pasta fornecida. Executar o comando:
npm run dev
Abrir o XAMPP, iniciar Apache e MySQL
Editar o arquivo config.ini com as informações do banco de dados
Para criar as tabelas, executar no Node.JS os comandos:
npm install mysql
node “diretorio”/server-config-1st-time.js
Para executar a aplicação, use os comandos:
CD “diretorio”
Npm run dev

Caso o XAMPP esteja rodando numa porta diferente do Node.JS, é possível que o App.vue não consiga fazer as requisições. Para tal, as linhas 67, 115, 123 precisarão ser alteradas pelo endereço correto dos arquivos. Além, a extensão https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi pode ser útil caso haja erro.

