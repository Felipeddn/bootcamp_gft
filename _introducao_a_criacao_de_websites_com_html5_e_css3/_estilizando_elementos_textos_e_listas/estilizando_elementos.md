# propriedades do CSS

## Padding

padding : valores referentes ao eixo y (padding superior e padding inferior) e eixo x (padding esquerdo e direito)
padding: 10px 5px

padding : valores referente ao topo, direita, base, esquerda;

padding: 15px 10px 5px 0;

quando o valor é 0 não precisamos usar a unidade de medida do valor.

podemos editar um espaço especifico da propriedade padding:
- para o topo 
padding-top

- para a direita
padding-right

- para a base
padding-bottom

- para a esquerda
padding-left

## Background

formas de mudar a cor:
background-color define a cor de fundo do elemento 
background: atalho para definir a cor

background-image define uma imagem como o background (uma imagem de fundo) do elemento
background-position define a posição da imagem (não exatamente o que faz é uma hipotese minha   )

lugar para estudar sobre propriedades css: https://developer.mozilla.org/pt-BR/docs/Glossario/property/CSS

## Border

podemos configurar 3 valores da borda a largura da borda, o estilo (linhas, tracejado...) e cor.

As bordas como o padding podem ser editadas em um lado específico 

- para o topo 
border-top

- para a direita
border-right

- para a base
border-bottom

- para a esquerda
border-left

Podemos editar os valores especificos da borda.

border-width serve para editar o tamanho da borda.

border-color serve para editar a cor da borda.

border-style serve para editar o estilo da borda.

podemos editar uma propriedade especifica da borda em conjunto com um lado especifico, um estilo de borda do lado esquerdo por exemplo e um tamanho de borda do lado direito.

- exemplo: editar o tamanho (width) apenas no topo da borda do elemento.
border-top-width

- exemplo: editar a cor da borda do lado direito do elemento
border-right-color 

- exemplo: editar o estilo da borda na base do elemento
border-bottom-style

Podemos arredondar as bordas com a propriedade border-radius levando em consideração aquela orientação de preenchimento de valores que corresponde ao lados 

- um valor arredonda todas as bordas

border-radius: 10px (todas os lados sofrerá uma alteração de 10 pixels)

- dois valores que afeta o eixo y (topo e base) e o eixo x (direita e esquerda)
border-radius: 10% 20%

- quatro valores que afeta respectivamente: topo, direita, base e esquerda
border-radius: 10% 20% 30% 40% (ordem de edição: topo, direita, base e esquerda, pode ser redundante mas a prática fixa esses valores.)

# Boas práticas

A edição de espaço de elementos devem ocorrer na folha de estilo do CSS **NÃO EDITE USANDO A TAG <BR />** para propósito de distanciar elementos na página HTML

Quando escolhemos editar o espaçamento entre elementos devemos aplicar essa regra nos demais elementos é uma boa prática escolher apenas uma direção para distanciar os elementos, se a margin no primeiro elemento foi aplicado na base os demais elementos devem ser editados na base para ficar distantes uns dos outros, caso foi editado no topo, mantenha essa configuração nos demais elementos.



