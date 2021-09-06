/* Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

Exemplos de Entrada	Exemplos de Saída
3.0 4.0 5.2

TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000

12.7 10.4 15.2

TRIANGULO: 96.520
CIRCULO: 725.833
TRAPEZIO: 175.560
QUADRADO: 108.160
RETANGULO: 132.080

*/
/* No Site URI var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = input.split(" ").map(item => parseFloat(item))

var triangulo = A * C / 2
var circulo = 3.14159 * Math.pow(C, 2)
var trapezio = (A + B) * C /2 
var quadrado = Math.pow(B, 2)
var retangulo = A * B


console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3)) */

// ===========VSCODE===========
var [A, B, C] = [3.0, 4.0, 5.2] // teste outro também -> [12.7, 10.4, 15.2]
var Pi = 3.14149

var triangulo = A * C / 2
var circulo = Pi * Math.pow(C, 2)
var trapezio = (A + B) * C /2 
var quadrado = Math.pow(B, 2)
var retangulo = A * B


console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))
