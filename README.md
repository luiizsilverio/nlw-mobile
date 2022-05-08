<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/nlw-mobile/blob/main/src/assets/bug.png" /></td>
    <td><h1>NLW-WIDGET-MOBILE</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a aplicação](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando a aplicação](#car-Iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida em React Native com Expo + Typescript durante o NLW Return, promovido pela Rocketseat.<br />
Durante o evento, foram desenvolvidas 3 aplicações, uma [API em Node](https://github.com/luiizsilverio/nlw-prisma), uma [aplicação React](https://github.com/luiizsilverio/nlw-widget) e este App, que faz o mesmo que a aplicação React.<br />
A aplicação consiste em um botão flutuante, no estilo widget, que permite relatar um problema ou comentário, tirar um screenshot da tela e enviar para a API, que se encarregará de gravar o feedback no banco e enviar um e-mail.<br />

## :hammer_and_wrench: Tecnologias
* __React Native__ + __Expo__
* __Typescript__
* __Bottom-Sheet__ para o painel estilo push-down/push-up
* __Phosphor-React-Native__ para os ícones
* __Expo-file-system__ para converter a imagem em Base64

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/nlw-mobile/tree/main/src/assets/nlw-mobile.gif)

## :car: Iniciando a aplicação
* Baixe e instale o <ins>ExpoGo</ins> no dispositivo (celular ou emulador)
* Baixe o repositório com ``` git clone ``` e entre na pasta da aplicação.
* Informe o IP da API no arquivo ``` src/libs/api.ts ```, em ``` BaseURL ```.
* Digite ``` npm install ``` no terminal, para inicializar o projeto.
* Digite ``` expo start ``` no terminal, para iniciar o servidor Expo.

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
