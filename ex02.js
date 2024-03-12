function saudacao(nome){
    return `Saudações ${nome}, seja bem-vindo!`;
}

console.log(saudacao("Bruno"));

function somaQuadrado(x, y){
    let soma = x + y;
    let quadrado = Math.pow(soma, 2);
    return {soma, quadrado};
}

console.log(somaQuadrado(3, 6));

function concatenaPalavras(string1, string2){
    return `${string1} ${string2}`;
}

console.log(concatenaPalavras("Bruno", "Daniel"));

function primeiroUltimoCaractere(string){
    const primeiro = string.charAt(0);
  const ultimo = string.charAt(string.length - 1);
  return `${primeiro}${ultimo}`;
}

console.log(primeiroUltimoCaractere("Bruno"));

function comparacaoNumeros(num1, num2) {
    if (num1 > num2) {
      return `${num1} é maior que ${num2}`;
    } else if (num1 < num2) {
      return `${num2} é maior que ${num1}`;
    } else {
      return `Os números são iguais`;
    }
}

console.log(comparacaoNumeros(2, 4));

function escopoVariaveis() {
    let dentroDaFuncao = "Variável dentro da função";
    return dentroDaFuncao;
}
  
let foraDaFuncao = "Variável fora da função";
  
console.log(escopoVariaveis());
console.log(foraDaFuncao); 


let numerosArray = [1, 2, 3, 4, 5];

function calcularMedia(numeros) {
    let soma = 0;

    for (const num of numeros) {
        soma += num;
    }

    return soma / numeros.length;
}

console.log(calcularMedia(numerosArray));


function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorial(numero - 1);
    }
}

console.log(fatorial(5));

function executaCallback(minhaFuncao){
    if (typeof minhaFuncao === 'function') {
        minhaFuncao();
      } else {
        console.error('Erro: O argumento fornecido não é uma função.');
      }
}

function minhaFuncao() {
    console.log('A função de callback foi executada!');
}
  
executaCallback(minhaFuncao);



function aguardarSegundos(segundos, mensagem) {
    setTimeout(() => {
      console.log(mensagem);
    }, segundos * 1000);
  }
  
  aguardarSegundos(3, "Passaram-se 3 segundos.");


  
function ehNumero(valor) {
  return typeof valor !== 'boolean' && valor != null && !isNaN(Number(valor));
}

console.log(ehNumero(42));
console.log(ehNumero("abc"));
console.log(ehNumero(true));
console.log(ehNumero(null));