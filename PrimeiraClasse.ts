class Carro {
  private modelo: string
  private numeroDePostas: number
  private velocidade: number = 0

  //Construtor é responsável por receber os parâmetro, no momento que a classe foi inicializada
  constructor(modelo: string, numeroDePostas: number) {
    this.modelo = modelo
    this.numeroDePostas = numeroDePostas
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 10
  }

  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }
}
/* 
let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
console.log(carroA) */


class Concessionaria {
  private endereco: string
  private listaDeCarros: Array<Carro>

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco
    this.listaDeCarros = listaDeCarros
  }

  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros
  }
}
/* 
let concessionaria = new Concessionaria('Av Paulista')
console.log(concessionaria) */


class Pessoa {
  //Atributos
  private nome: string
  private carroPreferido: string
  private carro: Carro

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome
    this.carroPreferido = carroPreferido
  }

  public dizerNome(): string {
    return this.nome
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro
  }

  public dizerCarroQueTem(): Carro {
    return this.carro
  }
}

/* const pessoa = new Pessoa('Silvano', 'Corsa')
console.log(pessoa.dizerCarroPreferido()) */


/* criar carros */
let carroA = new Carro('Corsa', 4)
let carroB = new Carro('Onix', 3)
let carroC = new Carro('Uno', 4)

/* montar a lista de carros da concessionaria */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* exibir a lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())

/* Comprar Carro */
let cliente = new Pessoa('Silvano', 'Onix')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro['modelo'] == cliente.dizerCarroPreferido()) {
    //comprar carro
    cliente.comprarCarro(carro)
  }
})
console.log(cliente.dizerCarroPreferido())