const funcao = require('./callback');

console.log('Inicio')

funcao(function(string,numero){
  console.log(string);
  numero += 123;
  console.log(numero);
})

console.log('Fim')
