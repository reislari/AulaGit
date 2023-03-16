class Livro{
    constructor(pNome){
        this.nome = pNome
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

}

var obj_livro1 = new Livro("Diário de uma princesa")
console.log("Nome do livro: +obj_livros1.nome")