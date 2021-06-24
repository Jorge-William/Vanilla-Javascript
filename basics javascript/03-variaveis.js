// Variáveis são usadas na programação para se referir à um valor aramazenado em memória 

// Usando com valores primitivos não é possivel modificar o valor *já com array ou objetos o valor pode ser modificado
// --- Const
const nome = 'maria';

nome = 'joão';

console.log(nome); // Retorna um Erro pois não se pode modificar o valor de uma const

// Exemplo de um caso onde a palavra chave const pode ter seu valor modificado
const pessoa = { nome: 'Fabio'}
pessoa.nome = "William"; 
console.log(pessoa);// { nome: 'William' }


// --- let

let idade = 20;

idade = 21;

console.log(idade); // Retorna 21 pois com a palavra chave let as variaveis podem ter seus valores modificados

// --- var
// A palavra chave var caiu em desuso pois seu escopo fica livre (Vaza) para todo o código gerando dores de cabeça

var idade = 30;