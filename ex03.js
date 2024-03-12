//objeto literal
const carteira = {
    ABEV: 0,
    ITUB: 0,
    USIM: 0,
    MSFT: 0,
}

carteira.ABEV = 200;
carteira.ITUB = 500;
carteira.USIM = 100;
carteira.MSFT = 50;
let soma = 0
for (campo in carteira) {
    soma += carteira[campo]
}
console.log(soma)   