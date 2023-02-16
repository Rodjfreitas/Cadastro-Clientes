let nome = document.querySelector('.name')
let endereco = document.querySelector('.adress')
let cidade = document.querySelector('.city')
let estado = document.querySelector('.state')
let nascimento = document.querySelector('.birth')
let telefone = document.querySelector('.phone')
let tabela = document.querySelector('table')
let valores = []

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
  }else{
    valores.push(nome.value, endereco.value, cidade.value, estado.value, nascimento.value, telefone.value)    
    
    let linha = document.createElement('tr')

    for(pos in valores){
      let item = document.createElement('td')
      item.setAttribute('class','listas')
      item.append(valores[pos]) 
      linha.append(item) 
      tabela.append(linha)     
    }
    valores = []
    nome.value = ""
    endereco.value = ""
    cidade.value = ""
    estado.value = ""
    nascimento.value = ""
    telefone.value = ""
    nome.focus()
    
    
    
  }
  


  console.log(valores)
}