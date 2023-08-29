function calcular() {
    var numerosStr = document.getElementById("numeros").value;
    var numeros = numerosStr.split("-");
    
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += parseFloat(numeros[i]);
    }
    var media = soma / numeros.length;
    
    numeros.sort(function(a, b) { return a - b; });
    
    var mediana;
    if (numeros.length % 2 === 0) {
        var meio1 = parseFloat(numeros[numeros.length / 2 - 1]);
        var meio2 = parseFloat(numeros[numeros.length / 2]);
        mediana = (meio1 + meio2) / 2;
    } else {
        mediana = parseFloat(numeros[Math.floor(numeros.length / 2)]);
    }
    
    var modaMap = {};
    var maxCount = 0;
    var moda = [];
    for (var i = 0; i < numeros.length; i++) {
        if (!modaMap[numeros[i]]) {
            modaMap[numeros[i]] = 1;
        } else {
            modaMap[numeros[i]]++;
        }
        if (modaMap[numeros[i]] > maxCount) {
            moda = [numeros[i]];
            maxCount = modaMap[numeros[i]];
        } else if (modaMap[numeros[i]] === maxCount) {
            moda.push(numeros[i]);
        }
    }
    
    var somaQuadrados = 0;
    for (var i = 0; i < numeros.length; i++) {
        somaQuadrados += Math.pow(parseInt(numeros[i]) - media, 2);
    }
    var variancia = somaQuadrados / numeros.length;
    var desvioPadrao = Math.sqrt(variancia);

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
