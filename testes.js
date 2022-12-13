class Aluno {

    constructor(nome = "", qtdFaltas = 0, notas = []){
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;
        
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]; 
        }
        let media = soma/this.notas.length 
        return media;
    }

    faltas() {
        this.qtdFaltas ++;
        return this.qtdFaltas;
    }

}