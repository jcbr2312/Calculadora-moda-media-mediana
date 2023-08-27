# Calculadora-moda-media-mediana
Este código calcula a moda, mediana, média, variância e desvio padrão de um conjunto de números usando JavaScript, estrutura em html.
 A função recebe como entrada uma string de números separados por "-" e retorna um objeto com os resultados dos cálculos.

Exemplo de uso:
JavaScript
const numeros = "1-2-3-3-4-5-5-6";
const resultados = calcular(numeros);

console.log(resultados);
Use o código com cuidado. Saiba mais
A saída do código acima será:

JavaScript
{
  moda: ["3"],
  mediana: 3.5,
  media: 3.875,
  variancia: 1.2706894736842105,
  desvioPadrao: 1.1230395862120725
}



O código funciona da seguinte forma:

A função separa a string de números em um array de números.
Calcula a soma dos números no array.
Calcula a média dos números no array.
Ordena os números no array em ordem crescente.
Se o número de números no array for par, a mediana é a média dos dois números no meio do array.
Se o número de números no array for ímpar, a mediana é o número no meio do array.
Cria um objeto para armazenar o número de vezes que cada número aparece no array.
Encontra o número que aparece com mais frequência no array e o define como a moda.
Calcula a variância dos números no array.
Calcula o desvio padrão dos números no array.
Define os resultados dos cálculos como propriedades do objeto retornado pela função
