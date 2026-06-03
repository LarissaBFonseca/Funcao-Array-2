let idades = [];

for (let i = 0; i < 7; i++) {
    idades[i] = Number(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
}

let resultado = "Posições com pessoas maiores de 25 anos:\n";
let encontrou = false;

for (let i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        resultado += `Posição ${i}\n`;
        encontrou = true;
    }
}

if (encontrou) {
    alert(resultado);
    console.log(resultado);
} else {
    alert("Não há pessoas com mais de 25 anos.");
    console.log("Não há pessoas com mais de 25 anos.");
}