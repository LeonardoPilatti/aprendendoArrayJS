// o '.forEach' é um método de Array, ele possui tanto no 'ArrayLike', EX: 'NodeList';


const carros = ['Ford', 'Fiat', 'Honda'];
/// no itemAtual irá mostrar o item que está do array, no index irá mostrar a posição do itemAtual no array e o array irá mostrar sobre qual array está fazendo o forEach
carros.forEach(function(itemAtual, index, array) {
  console.log(itemAtual.toUpperCase(), index, array);
});

// com Arrow Function
carros.forEach((itemAtual, index, array) => {
  console.log(itemAtual.toUpperCase(), index);  /// ToUpperCase faz as palavras ficarem todas maisculas;
});

console.log(carros);  /// ele continua a escrever do jeito que é, sem letras maisculas, pois o ToUpperCase não muda a constante


const carros2 = ['Ford', 'Fiat', 'Honda'];

const novaArrayCarros2 = carros2.map((item, index) => {   /// com o '.map' estou fazendo o mesmo que o ForEach, porém posso armazenar em uma constante, criando assim um novo array; 
  console.log(item, index);
  return item;    /// no '.map' precisa ter o retorno do item, para conseguir armazenar na constante com a nova array, para não voltar 'undefined' igual ao ForEach;
});

console.log(carros2);
console.log(novaArrayCarros2);  /// 


const NovoooArrayCarros2 = carros2.map((item, index) => {   /// com o '.map' estou fazendo o mesmo que o ForEach, porém posso armazenar em uma constante, criando assim um novo array; 
  return item.toUpperCase();    /// no '.map' precisa ter o retorno do item, para conseguir armazenar na constante com a nova array, para não voltar 'undefined' igual ao ForEach;
});

console.log(NovoooArrayCarros2);    /// aqui retorna os itens do array como todos maiusculos, pois estou retornando todos .UpperCase();



const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((numeroItem) => {
  return numeroItem * 2;
});
console.log(numerosX2);

/// ou posso escrever assim:               /// nessa parte aqui de 'numeroItem * 3' é a parte do 'return'
const numerosX3 = numeros.map(numeroItem => numeroItem * 3);
console.log(numerosX3);

//// se precisar de uma nova Array, uso o 'Map', se não precisar de uma nova Array, uso o 'ForEach';


const carros4 = ['Ford', 'Fiat', 'Honda'];
carros4.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

console.log(carros4); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']



/// exemplo de '.map' real:   /// OBS: É um array, onde cada item do Array é um objeto;
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;  /// é uma Arrow Function; é mesma coisa que: const nomeAulas = function(aula) { return aula.nome };
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



const listaNumeros = [10, 25, 30, 3, 54, 33, 22];
const maiorNumero = listaNumeros.reduce((acumuladorAnterior, itemAtual) => {  /// posso usar o Reduce para contar qual é o maior e também para somar com o numero anterior;
  if (acumuladorAnterior > itemAtual){
    return acumuladorAnterior 
  } else {
    return itemAtual
  }
}, 0)   /// ele começa com zero, para o acumuladorAnterior começar do primeiro index, no caso, o itemAtual[0];

console.log(maiorNumero);  /// retorna 54


/// ou posso fazer assim com o 'Reduce':

const numeros4 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros4.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
  /// o '?' é se o anterior for maior que o atual, ele irá retornar o atual, se não, retorna o anterior
}, 0);

maiorValor; // 60
console.log(maiorValor);


/// transformando NodeList em Array
const li = document.querySelectorAll('li');
console.log(li);
const Arrayli = Array.from(li);
console.log(Arrayli);





