* Introdução ao Git e GitHub - Otávio Reis

# Entendendo como o git funciona por baixo dos panos

* SHA1 ( Secure Hash Algorithm)
O SHA1 é um conjunto de funções hash criptográficas (mensagem aberta porem significado escondido) projetadas pela NSA (Agência de Segurança Nacional do EUA).

Embaralha os bits do arquivo de forma específica, ele gera uma saída de 40 caracteres que serve como identificação para atestar a integridade do arquivo, se algo for modificado no arquivo será possível verificar essa modificação sem precisar abrir o arquivo e comparar ambos os arquivos visualmente, por esse simples número é possível verificar isso.

comando para verificar uma encriptação SHA1: 
**echo** "ola mundo" | **openssl sha1**

o retorno desse comando tanto no Windows como no Linux é (Não possuo MacOs para testar mas seria uma honra!): 
Linux
(stdin)= d9802fa01c4c1dfc4ddaf61f766d8d56ad8a8699
Windows
(stdin)= d9802fa01c4c1dfc4ddaf61f766d8d56ad8a8699

engraçado que aqui ficou diferente do resultado que ele retornou no vídeo 
f9fc856e559b950175f2b7cd7dad61facbe58e7b

* Mudando o tema do git bash 
botão direito na aba do git bash > selecione *options...* > *Looks* (aparência) > na opção *Theme* escolha uma a do professor é o *Theme* dracula, por padrão ele é none > aperte *Save*.

Se foi seguida corretamente os passos da instalação do git podemos clicar com o botão direito no local que estamos e escolher a opção **Git Bash Here** o que evita ficar navegando do diretório (pasta)  inicial do git bash até o local do diretório (pasta) que desejamos acessar.

comando para gerar um valor hash de um arquivo:
**openssl sha1** nome_do_arquivo

código do arquivo exemplo
SHA1(_testando_hash_sha1.txt)= d1eec1650bc0a50d1ee089555775ef9d32bd34e6

código do arquivo exemplo modificado
SHA1(_testando_hash_sha1.txt)= c6e5e3946d326bf0245a28bfdb74b82a98c8dd77

código do arquivo exemplo retornado ao estado inicial
SHA1(_testando_hash_sha1.txt)= d1eec1650bc0a50d1ee089555775ef9d32bd34e6

* Objetos fundamentais


* Sistemas distribuídos


* Segurança