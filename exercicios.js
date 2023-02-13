// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Digite a altura do Retângulo"))
const largura = Number(prompt("Digite a largura do Retângulo"))
const area = altura*largura

console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const dataNasc = Number(prompt("Digite o ano de nascimento"))

  console.log(anoAtual-dataNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  return imc.toFixed(2)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("digite a primeira cor favorita")
const cor2= prompt("digite a segunda cor favorita")
const cor3 = prompt("digite a terceira cor favorita")

const bloco = [cor1,cor2,cor3]
console.log(bloco)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const novaString = string.toUpperCase()

return novaString
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const qtdIngressos = custo/valorIngresso

return qtdIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const testaString = (string1.length===string2.length)
return testaString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimo = array[array.length-1]
return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiro = array[0]
const ultimo = array[array.length-1]

array.pop()
array.push(primeiro)
array.shift()
array.unshift(ultimo)

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const checa = (string1.toLowerCase()) === (string2.toLowerCase())
return checa
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual"))
const anoNascimento = Number(prompt("Digite o ano Nascimento"))
const anoEmissao = Number(prompt("Digite o ano da emissão"))

const idade = anoAtual - anoNascimento
const renovacao = anoAtual - anoEmissao
let checaRenovacao 
if ((idade <= 20 ) && (renovacao >= 5)){
checaRenovacao=true
}else if((idade > 20 && idade <= 50) && (renovacao >= 10)) {
  checaRenovacao=true
}else if((idade > 50 ) && (renovacao >= 15)){
  checaRenovacao = true
}else{
  checaRenovacao = false
}

console.log(checaRenovacao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let ebissexto
if (( ano%400 == 0 ) || ((ano%4==0)  && (ano%100!= 0))){
  ebissexto = true
}else{
  ebissexto = false
}
return ebissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const mais18 = prompt("você tem mais de 18 anos?")
const ensinoMedio = prompt("você possui ensino medio completo")
const horario = prompt("você possui disponibilidade exclusiva durante os horários do curso?")
let inscricaoValida = false
if(mais18==='sim'&& ensinoMedio=== 'sim' && horario==='sim'){
inscricaoValida=true
}
console.log(inscricaoValida)
}