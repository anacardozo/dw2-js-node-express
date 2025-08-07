//Variáveis podem ser declaradas de 3 formas:
//Var, Let e Const
//Var: no geral evite o seu uso, pode não ser muito seguro.
//Let: utilize quando for necessário reatribuir o valor da variável.
//Const: utilize quando não for necessário reatribuir o valor.

// var nome = "Diego";
// var nome = "Maria";
// let cidade = "Registro";
// let cidade = "Pariquera"; // NÃO PODE
// let endereco
// endereco = "Rua tall"
// endereco = "lolo"
// const idade // NÃO PODE
// const idade = 18
// idade = 20 //NÃO PODE

// TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-Vindo! Essa é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}

// INVOCANDO A FUNÇÃO
showMessage();

// FUNÇÃO COM PARÂMETROS
const user = "Ana Flávia";

function userMessage(user) {
  //Essa função recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
  // ${} -> template strings / literal strings
  // É usado para inserir variáveis dentro de STRINGS aspas
}

userMessage(user);
