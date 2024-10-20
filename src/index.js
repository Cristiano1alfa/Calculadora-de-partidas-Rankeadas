// Calculadora de partidas Rankeadas

function calcularRank(vitorias, derrotas) {
    // Verifica se os valores são números não negativos
    if (vitorias !== 'number' , derrotas !== 'number' , vitorias < 0 , derrotas < 0) {
       
    }

    // Calcula o saldo
    const saldo = vitorias - derrotas;

let rank;
    if (vitorias < 10) {
        rank = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = 'Lendário';
    } else {
        rank = 'Imortal';
    }

    return {
        saldo,
        rank
    };
}

// Exemplo de uso:
const vitorias = 105;
const derrotas = 20;
const resultado = calcularRank(vitorias, derrotas);
console.log(`O Herói tem de saldo de : ${resultado.saldo}`);
console.log(`está no nível de: ${resultado.rank}`);
