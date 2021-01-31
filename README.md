# E-commerce Pokémon

E-commerce de Pokémon de um tipo especifico.

## Criar uma loja de um tipo de Pokémon

1- criar um arquivo .env com o nome do tipo de Pokémon, por exemplo: ice.env;

2- no arquivo .env colocar a variavel REACT_APP_TYPE_SHOP e atribuir um tipo de Pokémon como ice por exemplo;

3- adicionar o comando para iniciar o e-commerce especifico no package.json, por exemplo: "start-ice": "cp ice.env .env && react-scripts start".

## Scripts das lojas criadas

### `yarn start`

Por padrão inicia a loja do tipo "fire".
### `yarn start-dark`

Inicia a loja do tipo "dark".
### `yarn start-dragon`

Inicia a loja do tipo "dragon".
### `yarn start-fire`

Inicia a loja do tipo "fire".
### `yarn start-grass`

Inicia a loja do tipo "grass".
### `yarn start-water`

Inicia a loja do tipo "water".