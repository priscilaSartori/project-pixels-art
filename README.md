# Boas-vindas ao repositório do projeto Arte com Pixels!

Projeto de avaliação feito durante o curso da Trybe.

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
Neste projeto, você vai implementar um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨
</details>

# Orientações

<details>
  <summary><strong>Para acessar o projeto</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:priscilaSartori/project-pixels-art.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project-tryunfo`

  2. Inicie a aplicação com a extensão Live Server no VSCode

</details>

<details>
  <summary><strong>🏗 Estrutura do projeto</strong></summary>

- Implemente uma paleta de cores usando `javascript`, `css` e `html`;

- Crie os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente;

:warning: **É importante que seus arquivos tenham exatamente estes nomes!** :warning:

- Você pode adicionar outros arquivos se julgar necessário. Caso tenha alguma dúvida, poste no _Slack_;

 ⚠️ ** Recomenda-se que você desenvolva seu projeto com a resolução de tela  de `1366 x 768`, a mesma que será utilizada pelo avaliador. Para facilitar a configuração da resolução, use este [plugin do `Chrome`](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en).** ⚠️

* Caso seu projeto contenha imagens, ⚠️ **Atenção**:
  * Não utilize arquivos maiores que _500Kb_;
  * Utilize uma ferramenta como [esta](https://picresize.com/pt) para redimensionar as imagens.

* Você tem liberdade para implementar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, mas atente-se para **não conflitar com os requisitos propostos**. 

</details>

<details>
  <summary><strong>⚛️ Dicas</strong></summary>

- Não recomenda-se a utilização de `table`, pois o sentido semântico de construir uma tabela no HTML não tem relação  com a construção de uma grade de pixels para serem coloridos. Nesse caso, fazer uso de `table` representa uma má prática;

- Que tal usar um [_loop_](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) para adicionar o mesmo evento em vários elementos? Ou então a técnica de [_event bubbling_](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp);

- Para alterar alguma propriedade do _CSS_ de um elemento por meio do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.
- Caso a avaliação falhe com alguma mensagem de erro do tipo `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304` é provável que as imagens que está utilizando são muito grandes. Tente redimensioná-las para um tamanho menor.
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Desta forma, o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! 
  Para rodar o `ESLint` e o `StyleLint` localmente no projeto, execute os comandos abaixo:

  1. Para avaliar se os arquivos com a extensão `CSS` estão com o padrão correto

```bash
npm run lint:styles
```

  2. Para avaliar se os arquivos com a extensão `JS` estão com o padrão correto

```bash
npm run lint
```

⚠️ **Atenção** O `ESLint` e o `StyleLint` não serão avaliados neste projeto. Você pode rodar os testes localmente e fazer as correções se desejar. ⚠️

</details>

<details>
  <summary><strong>🛠 Testes e Cypress</strong></summary><br />

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web. Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o Cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

1. Para executar os testes apenas no terminal:

```bash
npm test
```

2. Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos comandos acima, uma janela de navegador será aberta e, então, você poderá escolher o teste a ser executado (project.spec.js) ou escolher `Run all specs` para executar todos os testes

</details>

# Requisitos Obrigatórios
## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>A página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `ID` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será testado:**

- O título deve possuir a tag `h1`;
- O título deve possuir o `ID` `title`;
- O título deve ser `Paleta de Cores`.

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>A página deve conter uma paleta com quatro opções de cores</summary>

- A paleta de cores deve ser um elemento com `ID` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

**O que será testado:**

- A paleta de cores deve possuir o `ID` `color-palette`;

- As cores individuais da paleta devem possuir a `classe` `color`;

- A cor de fundo de cada elemento da paleta é a cor que o elemento representa :warning: **A única cor não permitida na paleta é a cor branca** :warning:;

- Os elementos da paleta de cores devem ter borda preta, sólida e com 1 pixel de largura;

- As cores da paleta devem estar lado a lado;

- A paleta de cores deve estar posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não pode conter cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta. As demais cores podem ser escolhidas livremente. </summary><br />

**O que será testado:**

- A primeira cor da paleta deve possuir `background-color ` preto;

</details>

## 4 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `ID` denominado `pixel-board`, e cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será testado:**

- O quadro de "pixels" deve possuir o `ID` `pixel-board`;

- Cada pixel individual dentro do quadro deve possuir a `classe` `pixel`;

- A cor inicial dos "pixels" dentro do quadro deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

</details>


## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta sólida de 1px de espessura</summary><br />

**O que será testado:**

- O quadro de "pixels" deve possuir altura e comprimento de 5 elementos;

- Os elementos do quadro devem possuir 40 px de altura e 40 px de largura, incluindo o seu conteúdo e excluindo a borda preta;

- Os elementos do quadro devem possuir borda preta sólida de 1px de espessura.

</details>

## 6 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>A cor preta já deve estar selecionada na paleta para pintar os pixels do quadro ao iniciar a página.</summary>

- O elemento que posteriormente deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

- O elemento da cor preta deve possuir inicialmente a classe `selected`.

**O que será testado:**

- O elemento da cor preta possui, inicialmente, a classe `selected`;

- Nenhuma outra cor da paleta pode ter a classe `selected` ao carregar a página.

</details>

## 7 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A cor clicada deve receber a `classe` `selected` e a cor previamente selecionada deve perder esta `classe`;

- Somente uma das cores da paleta pode ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será testado:**

- Somente uma cor da paleta de cores pode ter a classe `selected` de cada vez;

- Os pixels dentro do quadro não devem ter a classe `selected` quando são clicados.

</details>

## 8 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>O <code>pixel</code> do quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores</summary><br />

**O que será testado:**

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado deve ter a cor alterada, sem influenciar na cor dos demais pixels.

</details>

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

**O que será testado:**

- O botão deve possuir o `ID` `clear-board`;

- O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve possuir o texto `Limpar`;

- O botão ao ser clicado, deve deixar todos os pixels do quadro preenchidos de branco.

</details>

# Requisitos Bônus

## 10 - Crie um input que permita à pessoa usuária preencher um novo tamanho para  o quadro de pixels.

<details>
  <summary>A página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

- Crie um input com `ID` `board-size` posicionado entre a paleta de cores e o quadro de pixels para receber um valor maior que zero para definir o tamanho do quadro de pixels.

- Crie um botão que deve conter o texto "VQV" e `ID` `generate-board`;

- O botão deve estar posicionado ao lado do input;

- O botão, ao ser clicado, deve alterar o tamanho do quadro para **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

**O que será testado:**

- O input deve possuir o `ID` `board-size`;

- O input deve aceitar apenas números maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`;

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve possuir o `ID` `generate-board`;

- O botão deve possuir o texto `VQV`;

- O botão deve estar posicionado ao lado direito do input;

- O botão, ao ser clicado, deve mudar o tamanho do board usando o valor do input;

- O botão, ao ser clicado sem valor definido no input, deve emitir um `alert` com o texto: `Board inválido!`;

- O quadro gerado deve ter todos os pixels preenchidos com a cor branca.

</details>

## 11 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>O quadro não pode ser definido com menos de 5 ou mais de 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

  1. Para um valor de `board-size` menor que 5, considere 5 `pixels` como o valor padrão;

  2. Para um valor de `board-size` maior que 50, considere 50 `pixels` como o valor padrão.

**O que será testado:**

- A altura do board pode ser igual a 50;

- A altura do board é 5 pixels quando um valor menor que 5 é colocado no input;

- A altura do board é 50 pixels quando um valor maior que 50 é colocado no input.

</details>

## 12 - Crie uma função para gerar as cores aleatoriamente, com exceção da cor preta, ao carregar a página.

<details>
  <summary>A primeira cor da sua paleta deve ser a cor preta, e as outras três cores deve ser geradas aleatoriamente.</summary><br />

**O que será testado:**

- A cor preta é a primeira na sua paleta de cores;

- As cores geradas na paleta são diferentes a cada carregamento da página.

</details>
