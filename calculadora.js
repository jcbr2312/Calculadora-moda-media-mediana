function calcularEstatisticas() {
    var numerosStr = document.getElementById("numeros").value;
    var numeros = numerosStr.split("-").map(parseFloat);

    if (!numeros.every(isFinite)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var media = calcularMedia(numeros);
    var mediana = calcularMediana(numeros);
    var moda = calcularModa(numeros);
    var variancia = calcularVariancia(numeros, media);
    var desvioPadrao = Math.sqrt(variancia);

    exibirResultado(moda, mediana, media, variancia, desvioPadrao);
}

function calcularMedia(numeros) {
    var soma = numeros.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    return soma / numeros.length;
}

function calcularMediana(numeros) {
    var sortedNumeros = numeros.slice().sort(function (a, b) {
        return a - b;
    });

    if (sortedNumeros.length % 2 === 0) {
        var meio1 = sortedNumeros[sortedNumeros.length / 2 - 1];
        var meio2 = sortedNumeros[sortedNumeros.length / 2];
        return (meio1 + meio2) / 2;
    } else {
        return sortedNumeros[Math.floor(sortedNumeros.length / 2)];
    }
}

function calcularModa(numeros) {
    var modaMap = {};
    var maxCount = 0;
    var moda = [];

    numeros.forEach(function (num) {
        modaMap[num] = (modaMap[num] || 0) + 1;

        if (modaMap[num] > maxCount) {
            moda = [num];
            maxCount = modaMap[num];
        } else if (modaMap[num] === maxCount) {
            moda.push(num);
        }
    });

    return 0;
}

function calcularVariancia(numeros, media) {
    var somaQuadrados = numeros.reduce(function (acc, num) {
        return acc + Math.pow(num - media, 2);
    }, 0);

    return somaQuadrados / numeros.length;
}

function exibirResultado(moda, mediana, media, variancia, desvioPadrao) {
    var modaText = "";
    
    if (moda.length > 0) {
        modaText = "Moda: " + moda.join(", ");
    } else {
        modaText = "Não há moda";
    }
    
    document.getElementById("resultadoModa").textContent = modaText;
    document.getElementById("resultadoMediana").textContent = "Mediana: " + mediana.toFixed(2);
    document.getElementById("resultadoMedia").textContent = "Média: " + media.toFixed(2);
    document.getElementById("resultadoVariancia").textContent = "Variância: " + variancia.toFixed(2);
    document.getElementById("resultadoDesvioPadrao").textContent = "Desvio Padrão: " + desvioPadrao.toFixed(2);
    
    var resultadoCampo = document.querySelector(".result");
    var resultadoDetails = document.querySelector(".result-details");
    
    resultadoCampo.style.opacity = 1;
    resultadoDetails.classList.add("show-details");
}

