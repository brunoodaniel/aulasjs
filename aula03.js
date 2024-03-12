//--------------------------------------OBJETOS---------------------------------------

// Objeto é o tipo de dado fundamento em JS
// criar um objeto
// objeto literal, assume-se que o protótipo é o padrão (Object)
const pessoa = {

}

// usando new, preciso ter uma classe criada
const name = new String()

// usando o protótipo Object
const objPadrao = Object.create({}) // atribui o protótipo padrão (Object)
const objPersonalizado = Object.create({x: 1, y: 2}) // instruindo qual o protótipo que quero que use
const objSemPrototipo = Object.create(null) // crio um objeto sem nenhum protótipo, zerado

// objPersonalizado.x => posso acessar a propriedade x


// Exemplos:

const livro = {
    titulo: "Nome do livro",
    autor: "Fulano de tal",
    data_publicacao: "05/01/2000",
    genero: "genero",
    editora: "Univas",
    numero_paginas: 200
}

console.log(livro.titulo + " - " + livro.autor)

const autor = {
    nome: "fulano de tal",
    nascimento: "01/01/1900",
    obras_publicadas: 70,
    toString: function (){ // função que ensina como deve ser a versão em texto do objeto
        return this.nome
        // this = objeto que está inserido
    },
    toString2: () => {
        return this.nome // vai retornar undefined
        // this = nada (não existe contexto dentro da arrow function)
    }
}

// JS me possibilita alterar o tipo de um dado previamente 
// inserido
livro.autor = autor

// posso acessar uma propriedade do objeto usando . ou []
console.log(livro.autor)
console.log(livro['editora'])

// posso acessar propriedades dinamicamente pelo []
// pois ele vai avaliar a expressão passada como argumento
const propriedade = "numero_paginas"
console.log(livro[propriedade])


// livro.for => não posso utilizar palavras reservadas 
// da linguagem


// Todo objeto em javascript é um Array Associativo
// Map, Hash, Dicionário
livro.coautor = "José"

console.log(livro.coautor)

livro["cidade_publicacao"] = "Pouso Alegre"

console.log(livro.cidade_publicacao)


console.log(livro)

// da mesma forma que posso adicionar propriedades dinamicamente
// posso remover uma propriedade dinamicamente.
delete livro.coautor
console.log(livro)

// posso obter uma lista de propriedades que o objeto possui
console.log(Object.keys(livro))

// o for/in vai passar por cada atributo e inserir o nome 
// dele no primeiro parâmetro
for(campo in livro){
    console.log(campo + " => " + livro[campo])
}

//---------------------------------------------STRINGS-------------------------------------------------------

let string = "texto"

let resultado = string == "texto" // true
    resultado = string < "zebra" // true
    resultado = string > "abacate" // true

let letra = "a"
resultado = letra == 65 // não faz conversão pra tabela ascii
resultado = letra != "A" // a != A => case sensitive


const string1 = "2 + 2" // string literal
const string2 = new String("2 + 2") // string object

console.log(eval(string1)) // com string literal ele calcula a expressão armazenada
console.log(eval(string2)) // com string object ele considera de fato um texto e não faz o cálculo

// Pode ser usado para criar uma calculador por exemplo.


let cpf = "123456789"

console.log(cpf.padStart(11, "0"))

// numero do cracha deve ter 05 digitos
let cracha = "8346"
console.log(cracha.padStart(5, "0"))

// nome deve ter 20 caracteres (complete com underscore caso não tenha)
let nome = "marcos"
console.log(nome.padEnd(20, "_"))


let palavra = "   conteudo   "

console.log(palavra.length)

// trimStart remove espaços em branco no inicio da string
console.log(palavra.trimStart(), palavra.trimStart().length)

// trimEnd remove espaços em branco no fim da string
console.log(palavra.trimEnd(), palavra.trimEnd().length)

// trim remove espaçoes em branco tanto no inicio quanto no fim da string
console.log(palavra.trim(), palavra.trim().length)

palavra = "  Marcos Antonio   "
console.log(palavra.trimStart(), palavra.trimStart().length)
console.log(palavra.trimEnd(), palavra.trimEnd().length)
console.log(palavra.trim(), palavra.trim().length)


console.log(palavra.replace(" ", "")) // substitui somente o primeiro
console.log(palavra.replaceAll(" ", "")) // substitui tudo
