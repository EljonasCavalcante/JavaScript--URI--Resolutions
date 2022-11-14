var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [distaciaPercorrida, combustivelGasto] = input.split(" ").map(item => parseInt(item)) 

var media = distaciaPercorrida

console.log(distaciaPercorrida)