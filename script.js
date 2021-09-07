
 var input = require("fs").readFileSync("stdin", "utf-8")

 var lines = input.split(" ") //chama uma string


 var [x, y] = input.split(" ").map(item => parseInt(item)) //chama Number

 console.log(input)
 