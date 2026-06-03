let numeros = [];

for (let i = 0; i < 15; i++) {
    numeros[i] = Number(prompt(`Digite o ${i + 1}º número:`));
}

let resultado = "Vetor completo:\n";

for (let i = 0; i < 15; i++) {
    resultado += numeros[i] + " ";
}

resultado += "\n\nPosições dos múltiplos de 10:\n";

let encontrou = false;

for (let i = 0; i < 15; i++) {
    if (numeros[i] % 10 === 0) {
        resultado += `Posição ${i} → ${numeros[i]}\n`;
        encontrou = true;
    }
}

if (!encontrou) {
    resultado += "Nenhum múltiplo de 10 foi encontrado.";
}

alert(resultado);
console.log(resultado);