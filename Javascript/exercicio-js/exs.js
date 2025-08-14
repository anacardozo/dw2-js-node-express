// EX1
const nome = "Ana Flávia";

function saudacaoPersonalizada(nome){
    document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadoura Universal!.</p>`);
}
saudacaoPersonalizada(nome);

////////////////////////////////////////////////////////////////////

// EX2

const num1 = 2;
const num2 = 3;
const operador = "*";
const operacaoMatematica = (num1, operador, num2) =>{
    return eval(`${num1} ${operador} ${num2}`);
}

document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${operacaoMatematica(2, "*" , 3)}.</p>`);

////////////////////////////////////////////////////////////////////

// EX3

const calcularDobro = (x) =>{
    return x * 2;
}

document.write(`<p>O dobro é ${calcularDobro(6)}.</p>`);

////////////////////////////////////////////////////////////////////

// EX4

const calcularMetade = (y) =>{
    return y / 2;
}

document.write(`<p>A metade é ${calcularMetade(12)}.</p>`);

////////////////////////////////////////////////////////////////////

// EX5

const iife = (function () {
  document.write("<p>Calculadora Universal pronta para uso!</p>")
})();