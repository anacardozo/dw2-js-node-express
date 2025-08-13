//FUNÇÃO ANÔNIMA
const soma = function (n1, n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`); //passando parametro para uma variavel

//typeof() - mostra qual o tipo de algo;
const tipo = typeof(soma);
document.write(`${tipo}`)

//ARROW FUNCTION (funcao anônima)
const dobro = (x) => {
  return x * 2;
}

document.write(`<p>O dobro do número é ${dobro(900)}</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador ,num2) => {
  return eval(`${num1} ${operador} ${num2}`);
}

document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}</p>`);
//eval no javascript é uma função nativa que realiza cálculos a partir de dois números e um operador;

//SIMPLIFICANDO ARROW FUNCTION COM UM ÚNICO RETORNO
const calculadora = (num1, operador ,num2) => 
   eval(`${num1} ${operador} ${num2}`);


document.write(`<p>O resultado da operação é ${calculadora(1100, "+", 1)}</p>`);

// IIFE - FUNÇÂO IMEDIATA (immediately invoked function expression) - a função precisa estar entre parenteses
// nao precisa chamar a variavel

const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente</p>")
})();

// IIFE COM PARÂMETRO
const loadUser = (function(user){
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`
  )
})("Diego"); // aqui é passado o parâmetro