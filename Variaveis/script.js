/*
Variáveis
Responsáveis por guardar dados na memoria
Inicia com a palavra var, let ou const - O que muda é a questão de escopo
*/

// DRY(Don't repeat yourself) - Principio da Programação
var nome = 'André';
let idade = 28;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);


var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco)

// Usando virgula

var sobrenome = 'Rafael',
    cidade = 'Rio',
    bairro = 'Copacabana'

console.log(sobrenome, cidade);

// Sem valor

var semDefinir;
console.log(semDefinir);

var semDefinir1;
var semDefinir2;
var semDefinir3;
var semDefinir4;

semDefinir1 = 'cor';

console.log(semDefinir1);

