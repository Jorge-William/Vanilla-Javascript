// Propriedades são infomações sobre objeto ou valor usa-se dot notation para acessar as propriedades
let name = 'Alexa';
// usando a propriedade length
console.log(name.length);// 5

// Alternativamente podemos usar o sinal de colxetes para acessar as propriedades
console.log(name['length']);// 5

// METODOS DE STRING
// Para acessar os métodos também usamos dot notation o que diferencia é que os métodos possuem dois parênteses 
// depois do nome do método exemplo: variavel.nomeMetodo()

console.log(name.toUpperCase());// Imprime valor em letras maiúsculas
console.log(name.toLowerCase());// Imprime valor em letras minusculo
console.log(name.charAt(0));// Imprime o caractere na posição 0 (primeira posição) - A
console.log(name.indexOf('A'));// Imprime a posição da letra A na string - 0
console.log(name.indexOf('Z'));// Imprime -1 pois o valor não existe
console.log(name.lastIndexOf('a'));// Imprime a posição que a letra 'a' aparece na string
console.log(name.includes('a'));// (ES6 feature) verifica se há a letra 'a' na string imprime true ou false
console.log(name.startsWith('A'));// (ES6 feature) Verifica se inicia com 'A' (case sensitive)
console.log(name.endsWith('a'));// (ES6 feature) Verifica se termina com 'a'
console.log(name.concat(' da Amazon'));// (ES6 feature) une as duas strings
let frase = "  Flamengo campeão!!!  "
console.log(frase.trim());// (ES6 feature) remove todos espaços
console.log(name.repeat(5));// (ES6 feature) repete um determinado numero de vezes a string e as une uma só






