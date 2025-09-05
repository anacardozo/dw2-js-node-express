// TAREFA 1

const dataAtual = new Date();
document.write(dataAtual);

//TAREFA 2

const compraInternacional = 1500;

const compraInternacionalUSD = compraInternacional.toLocaleString("en", {
  style: "currency",
  currency: "USD",
});

document.write(`<p>O valor da compra é ${compraInternacionalUSD}</p>`);

//TAREFA 3

const compraConvertida = compraInternacional * 5.60;
document.write(`<p>O valor da compra em real é: ${compraConvertida.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
}

)}.</p>`);


//TAREFA 4


dataAtual.setDate(dataAtual.getDate() + 12);

const mês = dataAtual.getMonth();
const ano = dataAtual.getFullYear();

document.write(`<p>A entrega do produto ocorrrerá daqui a 12 dias: ${dataAtual.getDate()}/${mês + 1}/${ano}</p>`);

