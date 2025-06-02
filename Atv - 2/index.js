// Criadas as variaveis para:
const quantidade = 7 //Numero de numeros que vão ser armazenados
let idades = []; // o vetor
let idade // a variavel que vai armazenar as idades
let lugares = []

// algoritmo que manda o usuario digitar as idades, não pode ser igual ou menor que 0 e não pode ser maior ou igual que 200

for (let i = 0; i < quantidade; i++) {
    do {
        idade = parseFloat(prompt(`Digite a idade ${i + 1}`));

        if (isNaN(idade) || idade <= 0 || idade >= 200) {
            alert("idade Invalida!");
        }
    } while (isNaN(idade) || idade < 0 || idade >= 200);

    idades[i] = idade;
}

// algoritmo que conta qual a posição da variavel é maior ou igual a 25

for (let j = 0; j < quantidade; j++) {
    if (idades[j + 1] >= 25) {

        console.log(` A posição das idades maiores que 25 são ${j + 1}`)

    }

}