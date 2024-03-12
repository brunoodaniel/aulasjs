const meuNome = "Bruno Daniel";
let minhaIdade = 21;

console.log(`Meu nome é ${meuNome} e tenho ${minhaIdade} anos.`);

let num1 = 10;
let num2 = 5;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

let palavra1 = "Olá";
let palavra2 = "Mundo";
let resultadoConcatenacao = palavra1 + " " + palavra2;

console.log(resultadoConcatenacao);

let umaString = "Exemplo";
console.log(`Primeiro caractere: ${umaString[0]}`);
console.log(`Último caractere: ${umaString[umaString.length - 1]}`);

let valor1 = 5;
let valor2 = 10;

console.log(`${valor1} é igual a ${valor2}? ${valor1 === valor2}`);
console.log(`${valor1} é diferente de ${valor2}? ${valor1 !== valor2}`);
console.log(`${valor1} é maior que ${valor2}? ${valor1 > valor2}`);
console.log(`${valor1} é menor que ${valor2}? ${valor1 < valor2}`);

function exemploEscopo() {
  let dentroDaFuncao = "Variável dentro da função";
  console.log(dentroDaFuncao);
}

exemploEscopo();

let foraDaFuncao = "Variável fora da função";
console.log(foraDaFuncao);

console.log("Mensagem com console.log");
console.warn("Aviso com console.warn");
console.error("Erro com console.error");
console.info("Informação com console.info");

let numeroString = "42";
let numeroInteiro = parseInt(numeroString);
console.log(`Número como string: ${numeroString}, Número como inteiro: ${numeroInteiro}`);

if (typeof window !== "undefined") {
  console.log("Executando no navegador");
} else {
  console.log("Executando no Node.js");
}

function somaDoisNumeros(a, b) {
  return a + b;
}

let resultadoSoma = somaDoisNumeros(3, 7);
console.log(`Resultado da soma: ${resultadoSoma}`);
