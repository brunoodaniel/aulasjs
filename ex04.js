//ex01
function imprimirEmOrdemCrescente(conjunto) {
    const conjuntoOrdenado = conjunto.sort();

    console.log(conjuntoOrdenado);
}

const elementos = [5, 2, 8, 1, 7];
imprimirEmOrdemCrescente(elementos);

//ex02
function retornarElemento(conjuntoDelementos, elementoEspecifico){
    const posicao = conjuntoDelementos.indexOf(elementoEspecifico);

    return posicao
}

const conjuntoDelementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementoEspecifico = 5;

console.log("\n" + retornarElemento(conjuntoDelementos, elementoEspecifico) + "\n")

//ex03
let array1 = new Array(1, 2, 3)
let array2 = new Array(4, 5, 6)

function umArray(array1, array2){
    
        array1.push(...array2)
    
    return array1
}


console.log(umArray(array1, array2))

//ex04
array1.sort()
console.log(`\nArray ordenado: ${array1}`)

array1.reverse()
console.log(`\nArray invertido: ${array1}`)

//ex05
const pessoa = {
    nome: "Bruno Daniel",
    peso: 70,
    idade: 21,
    altura: 1.79,
}

function propriedadesArray(object){
    return Object.keys(object);
}

const arrayDePropriedades = propriedadesArray(pessoa);

for (chave of arrayDePropriedades) {
    console.log(chave);
}

//ex06
const arrayElementos = [2, 5, 7, 6, 1, "aaa", 0, 30, "www", "r34", 10];

function verificaNumerosPares(array){
    const arrayPares = []

    for(var elemento of array){
        if(typeof elemento === 'number'){
            if(elemento % 2 === 0){
                arrayPares.push(elemento)
            }
        }
    }
    return arrayPares
}

console.log(verificaNumerosPares(arrayElementos))

//ex07
const arrayCompleto = [2, 5, 7, 6, 1, 345, 0, 30, 64, 144, 10];
const delimitador = "-";

function colocaDelimitador(array, delimitador){
    let string = "";
    for(let elemento of array){
        if(elemento == array.length - 1){
            string += elemento;
        }
        else{
            string += elemento + delimitador;
        }       
    }

    return string
}

console.log(colocaDelimitador(arrayCompleto, delimitador))

//ex08
function calcularEstatisticas(notasArray) { 
    let somaNotas = 0;
    let maiorMedia = 0;
    let menorMedia = Infinity;
  
    for (const aluno of notasArray) {
      const notas = aluno.notas;
      const mediaAluno = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
      somaNotas += mediaAluno;
      maiorMedia = Math.max(maiorMedia, mediaAluno);
      menorMedia = Math.min(menorMedia, mediaAluno);
    }
  
    const mediaGeral = somaNotas / notasArray.length;
  
    return {
      mediaGeral: mediaGeral,
      maiorMedia: maiorMedia,
      menorMedia: menorMedia
    };
  }
  
  const alunos = [
    { nome: "fulano", notas: [4, 5, 2, 8] },
    { nome: "ciclano", notas: [7, 6, 9, 8] },
    { nome: "beltrano", notas: [5, 8, 7, 6] }
  ];
  
  const estatisticas = calcularEstatisticas(alunos);
  console.log(estatisticas);
  
//ex09
function dividirConjunto(elementos, tamanho) {
    var resultado = [];
    for (var i = 0; i < elementos.length; i += tamanho) {
        resultado.push(elementos.slice(i, i + tamanho));
    }
    return resultado;
}

var conjunto = [1, 2, 3, 4, 5, 6, 7, 8];
var resultado = dividirConjunto(conjunto, 2);
console.log(resultado);

//ex10
function filtrarObjetosPorPropriedade(conjuntoObjetos, nomePropriedade) {
    return conjuntoObjetos.filter(objeto => nomePropriedade in objeto);
}

const objetos = [
    { nome: 'Objeto1', propriedade1: 10},
    { nome: 'Objeto2', propriedade2: 20},
    { nome: 'Objeto3', propriedade2: 'C'},
    { nome: 'Objeto4', propriedade1: 30}
];

const propriedadeDesejada = 'propriedade1';
const objetosFiltrados = filtrarObjetosPorPropriedade(objetos, propriedadeDesejada);

console.log(objetosFiltrados);