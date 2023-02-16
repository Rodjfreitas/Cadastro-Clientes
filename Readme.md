# Cadastro de Clientes

Neste projeto, me desafio a colocar em prática, conhecimentos obtidos através em javascript.
Me propus a realizar essa tarefa para treinar os conhecimentos adquiridos em javascript, tais como:

<li> Declaração de variáveis simples;

```
let nome = document.querySelector('.name')
let endereco = document.querySelector('.adress')
let cidade = document.querySelector('.city')
let estado = document.querySelector('.state')
let nascimento = document.querySelector('.birth')
let telefone = document.querySelector('.phone')
let tabela = document.querySelector('table')
````
<li> Declaração de variáveis compostas (arrays);

```
let valores = []
````

<li> trabalhando com índices de arrays;
<li> Estrutura de repetições for;

```
 for(pos in valores){
      let item = document.createElement('td')
      item.setAttribute('class','listas')
      item.append(valores[pos]) 
      linha.append(item) 
      tabela.append(linha)     
    }
````
<li> Funções (chamada, parâmetros, ação, retorno);

```
function verifield(n,a,c,s,b,p){
  if(n == 0 || a == 0 || c == 0 || s == 0 || b ==0 || p == 0){
    return true
  }else{
    return false
  }

}

function cadastro(){
  if(verifield(nome.value.length, endereco.value.length, cidade.value.length, estado.value.length, nascimento.value.length, telefone.value.length)){
    alert('Existem campos que não foram preenchidos!')
  }else{ [...]

````
