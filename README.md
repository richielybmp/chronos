# Projeto Final de Curso 
## Especialização em Desenvolvimento Web e Mobile - Full Stack
### CHRONOS

Chronos é a ferramenta que irá auxiliar as pessoas a se organizarem melhor durante o período de estudos. 

Com o Chronos, elas poderão gerenciar seus cronogramas criando disciplinas e sinalzando atividades realizadas durante a execução do mesmo.

### Chronos está vivo em 

[Heroku app - Chronos](https://ufg-chronos-app.herokuapp.com/)

### Padrão Arquitetural
Chronos foi construído usando  [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

Como se pode observar, separamos os diretórios da ferramenta em duas frentes: [Core](https://github.com/richielybmp/chronos/tree/master/chronos-core) e [Web](https://github.com/richielybmp/chronos/tree/master/web).

### Status do Projeto

Chronos está em constante desenvolvimento. Contudo, os usuários podem utilizá-lo sem preocupações e caso encontrem algum problema, sintam-se à vontade para relatar [aqui](https://github.com/richielybmp/chronos/issues/new).

### Capturas de Tela

[CAPTURA DE TELA 1 AQUI]

[CAPTURA DE TELA 2 AQUI]

### Instruções de Configuração e Instalação

Para o desenvolvimento, precisaremos do Node.js instalado no seu ambiente.

### Node

[Node](http://nodejs.org/) é muito simples de instalar & agora inclui o [NPM](https://npmjs.org/).
Após a instalação, você deverá ser capaz de executar o seguinte comando.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Instalação do Node no OS X

Você precisará de usar o Terminal. No OS X, você pode encontrar o Terminal em
`/Applications/Utilities/Terminal.app`.

Por favor, instale o [Homebrew](http://brew.sh/)  com o seguinte comando se ele ainda não estiver instalado

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Se tudo for executado com sucesso até aqui, você poderá executar o seguinte comando

    brew install node

#### Instalação do Node no Linux

    sudo apt-get install nodejs

#### Instalação do Node no Windows

Apenas vá para o [website oficial do Node.js](http://nodejs.org/) e pegue o instalador. Por fim, se assegure que você possui o `git` disponível no seu PATH pois o `npm` poderá precisar dele.

### Instalação do Yarn

Para a execução dos comandos de construção, atualização de dependências e execução dos projetos utilizaremos o `yarn`. Você pode fazer o download e seguir as instruções de instalação [aqui](https://yarnpkg.com/lang/pt-br/docs/install/#windows-stable).

## Instalação do Chronos

	$ git clone https://github.com/richielybmp/chronos.git
    $ cd chronos
	$ yarn install

Com a Arquitetura Clean, separamos o motor da aplicação no projeto `core`. Lá temos o domínio de dados, as classes responsáveis por intermediar a comunicação com nossa API, ações para o Redux, e configurações gerais.

Já no projeto `web` temos a criação de componentes do front-end e a manipulação dos dados da nossa ferramenta.

## Start

    $ yarn start

## Atualizar pacotes do projeto

Caso desejar fazer atualizações no `core`, precisaremos realizar um `build` no projeto e depois atualizar a dependência no `package.json` do projeto `web` assim:

	$ cd chronos-core
	$ yarn build

Volte para a pasta `chronos` e atualino o `package.json`

	$"chronos-core": "file:../chronos-core"

Dessa forma você estará referenciando o pacote `core` localmente.

Feito isso, para usufruir das alterações realizadas, deve-se atualizar o pacote com o seguinte comando

	$yarn upgrade chronos-core

---

## Languages & tools

- [TypeScript](https://www.typescriptlang.org/)
- [React](http://facebook.github.io/react) é usado para UI.
- [Redux](https://redux.js.org/basics/usage-with-react) 
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) para configurar as rotas.
- [React Slick](https://react-slick.neostack.com/) para nos ajudar com maravilhosos carrosséis.
- [Semantic UI](https://react.semantic-ui.com/) integrado com React
- [ChartJs 2](https://github.com/jerairrest/react-chartjs-2) para mostrar lindos gráficos.
