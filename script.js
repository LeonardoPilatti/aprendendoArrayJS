// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
console.log(cursos);
const cursosArray = Array.from(cursos);
console.log(cursosArray);

const objetoCurso = cursosArray.map((cursoItem) => {
    const titulo = cursoItem.querySelector('h1').innerText;  /// innerText para pegar o que está dentro do h1, no caso, o texto dentro do h1;
    const descricao = cursoItem.querySelector('p').innerText;  
    const aulas = cursoItem.querySelector('.aulas').innerText;  
    const horas = cursoItem.querySelector('.horas').innerText;  

    //const aulas = cursoItem.querySelectorAll('')
    return {        /// para retornar um objeto contendo o titulo, descrição e aulas, preciso retornar um objeto
        titulo: titulo,  /// ou poderia só colocar 'titulo,' pois com o ES6, permitiu isso; EX: da descrição;
        descricao,
        aulas,
        horas
    }
})         /// uso o '.map' pois preciso retornar um 'Array' e precisa ser em uma constante, para armazenar Array em constante, uso o '.map';

console.log(objetoCurso);




// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100);  /// aqui ele está filtrando os que são maiores que 100; OBS o 'n' é mesma coisa que 'item';

console.log(maioresQue100);  /// me retorna 3 itens, que são o 333, 122, 322, pois com o filter, ele filtra os que são maiores que 100 no caso ali;


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {       /// o '.some' vê se tem o item no array, se tem, ele retorna 'true';
    return item === 'Baixo';  /// aqui está verificando se o 'item' é 'Baixo', se for, retorna 'true' (verdadeiro);
})

console.log(possuiBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, itemCompra) => {
    // posso usar o 'replace' pois é uma string esse valor dentro das aspas em amarelo e ir encadeando elas;
    // lembrando que somente é numero quando for com '.', ex: 1.99 e não 1,99 (usando virgula)
    const precoLimpo = +itemCompra.preco.replace('R$ ', '').replace(',', '.')
    // console.log(precoLimpo);

    return acumulador + precoLimpo;  /// o acumulador é zero, pois é o zero ali em baixo, depois do '}, 0' 

}, 0);

console.log(valorTotal)
