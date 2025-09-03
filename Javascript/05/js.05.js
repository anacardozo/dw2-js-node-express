// MANIPULAÇÃO DE DATAS
document.write("<h3>Manipulando datas:</h3>");

//Criar uma instância da classe Date() do JavaScript

const dataAtual = new Date();
document.write(dataAtual);

//Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`);

//Pegando o mês atual: (Sempre adicionar + 1)
const mês = dataAtual.getMonth();
document.write(`<p>Estamos no mês: ${mês + 1} </p>`);

//Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Ano atual: ${ano} </p>`);

//Pegando o dia da semana:
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana + 1} </p>`);

//Adicionando Dias, Meses e Anos à Data atual
// Adicionando 4 anos ao ano atual

dataAtual.setFullYear(dataAtual.getFullYear() + 4);

document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

//Adicionando 3 meses ao mes atual
dataAtual.setMonth(dataAtual.getMonth() + 3);

//Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);

//FORMATAÇÃO DE MOEDAS

//REAL
document.write("<h3>Formatação de moedas:</h3>");


const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    // currency - moeda
    style: "currency",
    currency: "BRL",
});

document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

//DÓLAR

const salarioDolar = salario.toLocaleString("en", {
    style: "currency",
    currency: "USD",
});


document.write(`<p>Salário em dolar: ${salarioDolar}.</p>`);
const salarioConvertido = salario * 0.176;
document.write(`<p>Salário em valor de dolar: ${salarioConvertido.toLocaleString("en",{
    style: "currency",
    currency: "USD"
}

)}.</p>`);

//currency: EUR -> Euro

// FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings:</h3>")
const nome = "Ana Flávia";

//ALTERANDO PARA LETRAS MAIÚSCULAS
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`);

//ALTERANDO PARA LETRAS MINÚSCULAS
document.write(`<p>Nome em minúsculas: ${nome.toLowerCase()}</p>`);

//REMOVENDO ESPAÇOS DE UMA STRING - replace(serve para alterar)
const novoNome = nome.replace(/\s/g, "");

//CONTANDO CARACTERES EM UMA STRING - .length - (conta espaço tambem)
document.write(`<p>Esse nome tem: ${novoNome.length}</p>`);