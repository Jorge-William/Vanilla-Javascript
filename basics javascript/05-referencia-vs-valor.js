// Primitivo
let a = 1
let b = a
a = 15 // a mudança em uma referencia não afetará a outra

console.log(b);

// Não primitivo 
// A mudança feita em d ou c afetará ambas referências
const c = {
  value: 1
}

let d = c;

d.value = 10 // d e c recebem a mudança pois ambas referenciam o mesmo objeto 


console.log(c);