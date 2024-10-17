class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMax, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMax
        this.Aceleracao = aceleracao
    }

    velocidadeSegundos(distancia){
        return distancia / this.VelocidadeMaxima;
    }
}

class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }


    carMinTime(){
        let menorTempo = this.Participantes[0].velocidadeSegundos(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].velocidadeSegundos(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }
        return this.Vencedor = vencedor
    }
    ExibirVencedor(){
        alert("O vencedor é: "+ this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Monza", "Fórmula 1", 6000)

corrida.Participantes[0] = new Carro("Kicks",120,160,5)
corrida.Participantes[1] = new Carro("Marea",210,200,9)
corrida.Participantes[2] = new Carro("Peugeot 206",300,220,10)

corrida.carMinTime()
corrida.ExibirVencedor()


