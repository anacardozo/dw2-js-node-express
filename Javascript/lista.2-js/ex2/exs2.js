// Parte 1
const listaClientes = [
  {
    nome: "Joanna",
    endereco: "Av.Lisboa, 456, Sete Barras",
    cpf: 123456789,
  },
  {
    nome: "João Lucas",
    endereco: "Rua das Flores, 321, Registro",
    cpf: 987654321,
  },
  {
    nome: "Mariana",
    endereco: "Rua do Pato, 879, Cajati",
    cpf: 321546798,
  },
];
// Parte 2

listaClientes.forEach((cliente) => {
  document.write(`
        Nome: ${cliente.nome}<br>
        Endereco: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
});

// Parte 3

listaClientes.push({
  nome: "Pedro",
  endereco: "Av.Barretos, 258, Jacupiranga",
  cpf: 852741963,
});

document.write("<b>---- Array Atualizado Com Novo Objeto No Fim ---</b><br><br>")

listaClientes.forEach((cliente) => {
  document.write(`
        Nome: ${cliente.nome}<br>
        Endereco: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
});

listaClientes.unshift({
  nome: "Laura",
  endereco: "Av.Sprite, 369, Pariquera",
  cpf: 684759321,
});

document.write("<b>---- Array Atualizado Com Novo Objeto No Início ---</b><br><br>")

listaClientes.forEach((cliente) => {
  document.write(`
        Nome: ${cliente.nome}<br>
        Endereco: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
});
