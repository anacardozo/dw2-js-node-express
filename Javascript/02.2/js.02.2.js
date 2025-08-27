//MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = ['Laranja', 'Maçã', 'Banana'];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`)

//Inserindo um item sabendo a quantidade de itens
vetor[3] = 'Morango';
document.write(`<p>Agora nosso vetor é o: ${vetor}</p>`)

//PUSH - insere um novo elemento no fim do vetor:
vetor.push('Abacaxi');
document.write(`<p>Agora nosso vetor é o: ${vetor}</p>`);

//substituiu o vetor 0
vetor[0] = 'Pera';
document.write(`<p>Agora nosso vetor é o: ${vetor}</p>`);

// UNSHIFT - Insere um novo elemento no inicio do vetor
vetor.unshift('Laranja');
document.write(`<p>Agora nosso vetor é o: ${vetor}</p>`);

//Length - Retorna o número de elementos no vetor;
let numbers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso novo vetor é o: ${numbers}</p>`);
document.write(`<p>O número de elementos nesse vetor é ${numbers.length}</p>`);

//SORT - Ordena o vetor - para string só ele e para nums precisa colocar alguns parametros
document.write(`<p>O primeiro elemento do vetor é: ${numbers[0]}</p>`);

// numbersOrdenados - contém o vetor ordenado
let numbersOrdenados = numbers.sort()
document.write(`<p>O primeiro elemento do vetor ordenado é: ${numbersOrdenados}</p>`);

document.write(`<p>A lista ordenada de frutas é: ${vetor.sort()}</p>`);

//Ordenando um vetor numérico em ordem crescente:
// o primeiro valor tem que ser sempre menor que o segundo
// a e b - são variaveis onde dois numeros do vetor são colocados para ser comparados
document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`);

//Ordenando um vetor numérico em ordem decrescente:
document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`);



