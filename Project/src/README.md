Coment�rios e detalhes da instala��o em:

https://docs.google.com/document/d/1V1bVybTDU6KzAA01-U2HTSEC7GG9Rh5-j5NzaopJ5fI/edit?usp=sharing

Introdu��o

O desafio foi executado usando a plataforma Vue.JS para o frontend, em conjunto com PHP e MySQL, sendo estes �ltimos para o backend. Foi usado tamb�m o m�dulo WebPack para iniciar o Vue.
O projeto roda a partir do Node.JS e depende de uma base de dados MySQL e de um servidor capaz de executar PHP. Localmente, optei por rodar uma inst�ncia do XAMPP em conjunto com o Node.JS, pois tive problemas em utilizar executar MySQL e PHP atrav�s do Node.JS. Mas � poss�vel executar a aplica��o somente atrav�s do Node.JS.
A execu��o se d� com o envio do link para o arquivo �API.php�. Esse envio � feito atrav�s do VueJS, que aguarda a resposta do servidor e atualiza o link sem atualizar a p�gina.
Ao receber o link, o arquivo �API.php� trata o input e verifica se o link � v�lido. Caso seja, procede para a codifica��o e inser��o deste na base de dados.
O encurtamento � feito usando uma fun��o hash (Adler32), e funciona ao associar cada link a um ID �nico. A este ID, s�o atribu�dos: o link original, o link encurtado; o n�mero de acessos.
Ao receber um link v�lido, atrav�s do metodo POST, a api retorna o URL encurtado, que � ent�o exibido na p�gina.
Complementando a funcionalidade da aplica��o, est�o os arquivos �top5.php� e �totalhits.php�, respons�veis por retornar os 5 links mais acessados, e a soma de acessos a todos os links, respectivamente. Tais arquivos s�o requisitados atrav�s do Vuejs.
Al�m destes, a aplica��o conta com uma fun��o de redirecionamento. Esta � acionada atrav�s de um arquivo �.htaccess�, que detecta a entrada do usu�rio, e redireciona esta entrada para o arquivo �redirect.php�. Ao receber uma entrada ShortURL v�lida, o programa associa a entrada ao seu ID, busca o banco de dados pelo URL correspondente a esse ID, incrementa o n�mero de hits, e faz o redirecionamento ao site correspondente.

O layout da p�gina se encontra no arquivo �App.vue�. Neste tamb�m est�o as fun��es que acionam a aplica��o, e o Stylesheet em CSS. Neste arquivo, se encontram as fun��es em JavaScript: 
SendURL - Inicia uma requisi��o ao API.PHP com o url inserido, e envia a resposta para:
ChangeURL - Faz a transi��o na p�gina do URL inserido para o URL curto gerado.
NewURL - Acionada no momento que o usu�rio clica em �x�. Exibe novamente o campo de entrada para receber um novo URL.
GetData - Acessa os arquivos �top5.php� e �totalhits.php�, recebe as respostas, e as envia para: ShowData - Exibe na p�gina as respostas do servidor, e atualiza a cada 2 segundos a quantidade total de hits.

Instala��o

Abrir o Command Line do NodeJS
Navegar para o diret�rio que deseja instalar com o comando:
cd �diretorio�
Executar os comandos:
npm install vue
vue init webpack �nome do projeto�
Selecionar �n�o� para as op��es informadas, e instalar com o compilador.
Navegar ao diret�rio instalado, e substituir a pasta �src� pela pasta fornecida. Executar o comando:
npm run dev
Abrir o XAMPP, iniciar Apache e MySQL
Editar o arquivo config.ini com as informa��es do banco de dados
Para criar as tabelas, executar no Node.JS os comandos:
npm install mysql
node �diretorio�/server-config-1st-time.js
Para executar a aplica��o, use os comandos:
CD �diretorio�
Npm run dev

Caso o XAMPP esteja rodando numa porta diferente do Node.JS, � poss�vel que o App.vue n�o consiga fazer as requisi��es. Para tal, as linhas 67, 115, 123 precisar�o ser alteradas pelo endere�o correto dos arquivos. Al�m, a extens�o https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi pode ser �til caso haja erro.

