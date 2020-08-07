"use strict";
var Carro = /** @class */ (function () {
    //Construtor é responsável por receber os parâmetro, no momento que a classe foi inicializada
    function Carro(modelo, numeroDePostas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePostas = numeroDePostas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
/*
let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
console.log(carroA) */
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
/*
let concessionaria = new Concessionaria('Av Paulista')
console.log(concessionaria) */
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* const pessoa = new Pessoa('Silvano', 'Corsa')
console.log(pessoa.dizerCarroPreferido()) */
/* criar carros */
var carroA = new Carro('Corsa', 4);
var carroB = new Carro('Onix', 3);
var carroC = new Carro('Uno', 4);
/* montar a lista de carros da concessionaria */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())
/* Comprar Carro */
var cliente = new Pessoa('Silvano', 'Onix');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
