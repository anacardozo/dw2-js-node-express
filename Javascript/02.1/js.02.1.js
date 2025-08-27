//ARRAYS: Servem para armazenar uma lista, ou seja, diferentes elementos em única variável.

const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof products);
document.write(`<p>Exibindo um elemento do array através do índice:</p>`);
document.write(`<p>${products[3]}</p>`);

//forEach

document.write(`<p>Percorrendo array através do forEach:</p>`);
products.forEach(produto => {
  document.write(`<p>${produto}</p>`);
});

document.write(`<p>Mostrando os ínidces e valores com forEach:</p>`);

products.forEach((produto, i) => [
  document.writeln(`<p>${i + 1} - ${produto}</p>`)
])