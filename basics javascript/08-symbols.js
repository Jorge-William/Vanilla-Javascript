// O tipo Symbol foi introduzido no ES6 para evitar conflitos ao se nomear variáveis
// é o unico tipo primitivo que não tem como se declarar de forma literal
// A única forma de criar uma variável de tipo Symbol é usando a função chamada Symbol()

const uniqueID = Symbol('Description of symbol');

typeof uniqueID; // 'symbol'

// Podemos acessar a descrição de um simbolo manualmente usando a função String()
console.log(String(uniqueID))