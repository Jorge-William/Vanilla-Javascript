// escopo global
let a = 1

// Escopo local
{
 let a = 3;
  a;
  console.log(a);
}

console.log(a);


// sem declarar as palavras chave let ou const a variavel vaza o escopo local e se torna global
{
 c = 5
}

console.log(c);