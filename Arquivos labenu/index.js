// EXERCICIO N° 1

// let nome

// let idade

// typeof(nome)
// typeof(idade)

// // A mensagem Undefined apareceu porque, não foi atribuido nenhum valor as variaveis declaradas.

// const nome = prompt("qual é o seu nome?")

// let idade = prompt("Qual é a sua idade?")

// typeof(nome)
// typeof(idade)

// // Todo o resultado do tipo de variaveis de prompt, retorna como variavel do tipo string.

// console.log("Olá", nome,"Voce tem", idade, "anos");

// EXERCICIO N° 2

/*let chuva = prompt("Está chovendo hoje ?")
console.log("Está chovendo hoje ?", chuva)

let calor = prompt("Está quente por aí ?")
console.log("Está quente por aí ?", calor)

let fome = prompt("Vc está com fome ?")
console.log("Vc está com fome ?", fome)


// EXERCICIO N° 3



let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)*/

// Desafio

/*let numero1 = prompt("Digite um número")
let numero2 = prompt("Digite outro número")


let 
let multiplicação = numero1 * numero2

console.log(soma)
console.log(multiplicação)*/

//Aula de operadores aritméticos 09/09/21 

// let numero1 = 3
// let numero2 = 4
// let resultado = numero1 + numero2
// console.log(resultado)




// const nome = prompt("Digite seu nome")

// Exercicios de operadores

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Deverá ser feita a conversão dos prompts para number


// ---------------------------------------------------------------------------------------------------//


// EXERCÍCIO N° 1

// let idade = prompt("Digite a sua idade")
// let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amigo?")

// console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)

// let diferencaIdade = idade - idadeMelhorAmigo

// console.log("A diferença de idade é de :", diferencaIdade )


//---------------------------------------------------------------------------------------------------------//


// EXERCÍCIO N° 2

// let numeroPar = Number(prompt("Digite um numero par : "))
// console.log(numeroPar % 2)  

// Por padrão o resultado do resto da divisão por 2 será sempre 0.

// Quando inserimos um número impar sempre o resultado será 1.

//----------------------------------------------------------------------------------------------------------//


// EXERCICIO N° 3


// let idadeEmAnos = Number(prompt("Digite sua idade: "))

// console.log(idadeEmAnos * 12)
// console.log(idadeEmAnos * 365)
// console.log(idadeEmAnos * 8764)


//--------------------------------------------------------------------------------------------------------------//

//EXERCICIO N° 4

// let numero1 = Number(prompt("Digite um número :"))
// let numero2 = Number(prompt("Digite outro numero :"))

// console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
// console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
// console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0 )
// console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)



// let idade = Number(prompt("Digite sua idade: "))
// console.log("Eu tenho exatamente", idade," anos de idade")

//--------------------------------------------------------------------------------------------------------------//

// AULA 13/09/2021 - STRINGS E ARRAYS

// EXERCICIO 2

// let nomeCompleto = prompt("insira seu nome")
// console.log(nomeCompleto)

// console.log(nomeCompleto.toUpperCase())
// console.log(nomeCompleto.replaceAll(a,e,i,o,u))
// console.log(nomeCompleto.length)

// Exercicio 4//

const valores = [1,2,3,4,5,6]
const mudarValores = valores.splice(2,2)
console.log(valores)
