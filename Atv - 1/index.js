// Criadas as variaveis para:
const quantidade = 8 //Numero de numeros que vão ser armazenados
let idades = []; // o vetor
let idade // a variavel que vai armazenar as idades
let soma = 0 

// algoritmo que manda o usuario digitar as idades, não pode ser igual ou menor que 0 e não pode ser maior ou igual que 200 (Eu acho que é humanamente impossivel :P)

for (let i = 0; i < quantidade; i++) {
    do {
        idade = parseFloat(prompt(`Digite as idades ${i + 1}`));

        if (isNaN(idade) || idade <= 0 || idade >= 200) {
            alert("idade Invalida!");
        }
    } while (isNaN(idade) || idade < 0 || idade >= 200);

    idades[i] = idade;
    soma += idade
}

// algoritmo que faz a media das idades.

let media = (soma / quantidade)
alert(`A média das notas é ${(Math.round(media))}`)