* Introdução ao Git e GitHub - Otávio Reis

# Navegação  básica no terminal 

GUI x CLI

**GUI** (graphic user interface) - tela visual com os diversos comandos possíveis disponiveis por cliques em botões ou check em caixas vazias, etc.

**CLI** (command line interface) - comandos escritos em uma tela onde o visual não foi elaborado para agradar e tornar tudo tão responsivo, em um ambiente de servidor recursos computacionais são otimizados para melhorar o desempenho da aplicação uma gui consome mais recurso o que não é interessante para computadores com proprositos de servidor. 

* Diferenças entre Windows e Unix-like

O terminal do windows é chamado de bash e dos sistemas unix-like é shell.
Podemos inserir flags (bandeiras?), argumentos na frente dos comandos, para trazer uma funcionalidade específica ao comando.

- Windows
**cd** `nome_do_diretório` (change directory) - comando para navegar entre os diretórios (pastas) do sistema operacional
**cd** `/` - comando que vai para a pasta do disco C: sistema, a raiz do sistema windows não é acessível.  
**cd** `..` - comando com atalho (..) que muda para o diretório acima do ponto atual.
**cls** - comando que "limpa" o terminal.
**dir** () - comando para listar conteúdo de uma diretório (pasta).
**mkdir** (make a directory) - comando para criar um diretório (pasta).
**del / rmdir** (delete / remove a directory) - comando para excluir (delete) apenas arquivos, comando para  remover diretórios(rmdir).
**rmdir**  nome_do_diretorio `S/ Q/` - comando para remover diretório com arquivo.
**&uparrow;** - atalho para visualizar os comandos já executados.
**echo** - comando para repetir no terminal um texto
**echo >** nome_do_arquivo - comando para salvar um texto em um arquivo, se o arquivo não existir ele cria um.


- Unix-like (sistemas operacionais derivados do unix como MacOS ou as distribuições de Linux)

**cd** *nome_do_diretório* (change directory) - comando para navegar entre os diretórios (pastas) do sistema operacional
**cd** `/` - comando que vai para a pasta raiz do sistema.  
**cd** `..` - comando com atalho (..) que muda para o diretório acima do ponto atual.
**clear** - comando que "limpa" o terminal, muito útil para evitar alguns erros de digitação.
**ctrl + l** - atalho no teclado para o comando **clear**.
**Tab** - alto completa nomes de arquivos e diretórios.
**ls** (list) - comando para listar conteúdo de uma diretório (pasta).
**mkdir** (make a directory) - comando para criar um diretório (pasta).
**rm / -rf** (remove / remove a file) - comando para excluir (rm) um diretório vazio ou arquivo (-rf).
**rm** `-rf` - (rf = recursive force) - rf é a flag onde r é (recursive) para excluir toda a arvore de diretório e arquivos ,diretório dentro de diretório e arquivo dentro de diretório, e f (force) para não exibir confirmações para o comando.

# Instalação

