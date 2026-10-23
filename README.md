# Perfil - Tema Claro/Escuro

Uma página de perfil estilo *link na bio*, com troca de tema entre claro e escuro, feita com HTML, CSS e JavaScript puro.

---

## Sobre o projeto

Este projeto é uma página de perfil simples e responsiva, pensada para telas de celular. Ela reúne meus links principais (GitHub e LinkedIn) em um só lugar e permite alternar entre **tema escuro** (lua) e **tema claro** (sol) com um clique no switch.

Foi criado para praticar:

- Variáveis CSS (`:root` e `var()`) para montar temas;
- Layout com Flexbox;
- Efeito *glassmorphism* com `backdrop-filter`;
- Manipulação do DOM com JavaScript (`classList`, `setAttribute`);
- Ícones com a biblioteca Ionicons.

## Funcionalidades

- **Troca de tema** claro/escuro com um switch animado
- **Plano de fundo e ícone de perfil** que mudam junto com o tema
- **Botões de links** com efeito de vidro e *hover* suave
- **Layout pensado para mobile**
- **Ícones sociais** (GitHub, LinkedIn e outros) com Ionicons

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura da página |
| CSS3 | Estilos, temas com variáveis, Flexbox e `backdrop-filter` |
| JavaScript | Alternar a classe `light` e trocar o ícone do perfil |
| [Ionicons](https://ionic.io/ionicons) | Ícones sociais |
| [Google Fonts](https://fonts.google.com/) | Fonte Ubuntu |

## Estrutura de pastas

```
perfil/
├── css_externo/
│   └── style.css        # estilos e variáveis dos temas
├── js/
│   └── script.js        # função toggleMode()
├── pictures/
│   ├── bg-mobile.png         # fundo do tema escuro
│   ├── bg-mobile-light.png   # fundo do tema claro
│   ├── moon.png              # ícone do tema escuro
│   └── sun.png               # ícone do tema claro
├── index.html
└── README.md
```

## Como o tema funciona

Os temas são feitos com **variáveis CSS**. No `:root` ficam as cores do tema escuro, e a classe `.light` redefine essas mesmas variáveis para o tema claro:

- `--text-color`: cor do texto
- `--bg-url`: imagem de fundo
- `--stroke-color` e `--surface-color`: borda e fundo dos elementos de vidro
- `--switch-bg-url`: ícone do botão do switch

Ao clicar no switch, o JavaScript liga/desliga a classe `light` na tag `<html>`, e o CSS cuida do resto. O ícone do perfil também é trocado entre lua e sol.

---

Feito por @Rjulyane
