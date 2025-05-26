// Criadas as variaveis para:
const quantidade = 4 //Numero de numeros que vão ser armazenados
let numeros = []; // o vetor
let numero // a variavel que vai armazenar as idades
let resultado = " "

// algoritmo que manda o usuario digitar as idades, não pode ser igual ou menor que 0 e não pode ser maior ou igual que 200

for (let i = 0; i < quantidade; i++) {
    do {
        numero = parseInt(prompt(`Digite o numero ${i + 1}`));

        if (isNaN(numero) | numero <= 0) {
            alert("numero Invalida!");
        }
    } while (isNaN(numero) | numero <= 0);
    numeros[i] = numero

}
for (let j = 0; j < quantidade; j++) {
    if (numeros[j] % 10 === 0)
        resultado += (`${numeros[j]}-`)   

}
alert(`os numeros são: ${numeros}`)
alert(resultado)