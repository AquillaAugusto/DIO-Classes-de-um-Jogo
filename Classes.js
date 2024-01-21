class heroi{
    constructor(nome, idade, tipo, arma){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = arma
    }

    ataque(){
        if(this.tipo == "Guerreiro"){
            this.arma = "Espada"
            return(console.log(`o ${this.tipo} atacou usando ${this.arma}`))
        }
        if(this.tipo == "Mago"){
            this.arma = "Magia"
            return(console.log(`o ${this.tipo} atacou usando ${this.arma}`))
        }
        if(this.tipo == "Ninja"){
            this.arma = "Shuriken"
            return(console.log(`o ${this.tipo} atacou usando ${this.arma}`))
        }
        if(this.tipo == "Monge"){
            this.arma = "Artes Marciais"
            return(console.log(`o ${this.tipo} atacou usando ${this.arma}`))
        }
        
    }
}

let Felipe = new heroi("Felipe", 23, "Guerreiro" , "Claymore")
let Maria = new heroi("Maria", 20, "Monge", "Punhos")

Felipe.ataque()
Maria.ataque()
