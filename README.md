# Next Trip

Este projeto é uma página inicial responsiva chamada **Next Trip**. A documentação abaixo explica os principais arquivos e a estrutura do projeto.

## Estrutura principal

- `index.html`
  - Página principal do site.
  - Contém o cabeçalho (`<header>`) com o logo/ícone e menu de navegação.
  - A navegação utiliza um `input type="checkbox"` para controlar a exibição do menu em telas menores.
  - Links do menu:
    - `blog.html`
    - `pacotes.html`
    - `contato.html`

- `css/style.css`
  - Arquivo principal CSS carregado pelo HTML.
  - Importa outros arquivos CSS:
    - `css/global.css`
    - `css/header.css`

- `css/global.css`
  - Define fontes e variáveis CSS globais.
  - Registra a fonte `Montserrat` a partir de `fonts/Montserrat-VariableFont_wght.ttf`.
  - Inclui reset básico para remover margens e paddings padrão.

- `css/header.css`
  - Contém o estilo do cabeçalho e do menu de navegação.
  - Define comportamento responsivo:
    - em telas menores, o menu é ocultado e mostrado via checkbox.
    - em telas maiores, o menu é exibido em linha horizontal.

## Recursos

- `fonts/`
  - Contém a fonte `Montserrat` usada no site.

- `img/`
  - Contém imagens usadas no cabeçalho:
    - `Icon-NextTrip.png`
    - `menu.png`

## Observações

- O documento `index.html` é a entrada principal.
- O CSS é dividido em arquivos de estilo globais e específicos para facilitar a manutenção.
- A navegação é pensada para ser responsiva e funcionar em dispositivos móveis.

