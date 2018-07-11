# Desafio estagiário: Desenvolvimento

> **ATENÇÃO:** Antes de começar, se [cadastre na vaga](https://linxneemuchaordic.recruiterbox.com/jobs/fk0ffvx/) via Recruiterbox **=]**

O desafio proposto consiste no desenvolvimento de uma _landing page_ capaz de gerar um _link_ encurtado funcional a partir do _input_ de uma URL. Nele serão testados as habilidades e qualidade de código de um desenvolvedor ao transformar um _layout_ em um protótipo funcional com _back-end_ e _front-end_ bem desacoplados.

O encurtador de URL deverá ser implementado no _back-end_ juntamente com um validador capaz de indicar se o _link_ gerado está funcionando. A comunicação entre o _back-end_ e o _front-end_ deverá forma de uma _RESTful API_, onde neste último somente serão mostrados os resultados.

É esperado, através da implementação, que seja possível além de encurtar a URL que, ao acessá-la, o número de acessos incremente-se. 

Todas informações devem ser salvas em um banco de dados.

### Instruções

- **Forke** esse repositório e faça o desafio numa branch com o seu nome (exemplo: `nome-sobrenome`);
- Boa parte do seu objetivo é transformar esse [mockup](./Layout/Preview.jpg) em um protótipo funcional HTML/CSS/JS;
- No seu projeto, crie um diretório chamado `project`. Todos os arquivos que você criar devem estar dentro desta pasta;
- Assim que concluir o seu desafio, abra um **pull request** com suas alterações.

### Pré-requisitos

- O _front-end_ deverá ser desenvolvido utilizando o _framework_ React;
- O _back-end_ deverá ser desenvolvido utilizando o _framework_ Node.js.

### Layout

- Dentro da pasta [Layout](./Layout) possui um arquivo [psd](./Layout/Layout.psd) e [jpg](./Layout/Preview.jpg), use-os como referência para desenvolver o protótipo;
- Use as **cores** definidas no [guideline](./Layout/Guideline-color.jpg);
- As **fontes** utilizadas são: [Roboto](https://www.google.com/fonts/specimen/Roboto) e [Roboto Slab](https://www.google.com/fonts/specimen/Roboto+Slab);
- Caso necessário, na pasta [Assets](./Assets) possui as imagens já exportadas.

### Dicas

- Seu HTML deverá ser o mais semântico possível (faça bom uso das tags HTML5);
- No JavaScript, evite poluir o escopo global. O uso ou não de bibliotecas também será avaliado.


### Diferenciais

- Boa documentação (como rodar o projeto, como foi organizado...);
- Uso de pré-processadores CSS ([Sass](http://sass-lang.com), [Less](http://lesscss.org), [Stylus](http://stylus-lang.com));
- Adaptar a página para dispositivos móveis (torná-la responsiva);
- Utilizar alguma automatização ([Grunt](http://gruntjs.com), [Gulp](http://gulpjs.com), [NPM Scripts](https://docs.npmjs.com/misc/scripts)), [webpack](https://webpack.js.org/);
- Criar [essa interação](./Layout/Shortener-interaction.gif) ao submeter um novo link;
- Consumir esse [JSON](./Assets/urls.json) no _back-end_ para a seção **TOP 5** como o estado inicial da aplicação;

---

Em caso de dúvidas, [abra uma issue](https://github.com/chaordic/developer-intern-challenge/issues).

**Boa sorte =]**
