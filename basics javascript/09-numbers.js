// Números podem ser inteiros ex: 3 ou ponto flutuante ou decimal ex: 3.14159

typeof 42; // 'number' - inteiro

typeof 3.14159; // 'number'  - decimal ou float point

// O JavaScript não diferencia integer de decimal mas o ES6 provê uma função para distinguir esses "tipos"
Number.isInteger(36); // retorna 'true'

Number.isInteger(3.14159); // retorna 'false'
