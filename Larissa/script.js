class Pessoa{
    constructor(pNome, pEndereco){
        this.nome = pNome
        this.endereco = pEndereco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Endereco(){return this.endereco}
    set Endereco(pEndereco){this.endereco = pEndereco}

    imprimir(){
        return "Nome: " + this.nome + "\n Endereço: " + this.endereco
    }
}

class Fisica extends Pessoa{
    constructor(pCpf, pDTNasc, pNome, pEndereco){
    super(pNome, pEndereco)
    this.cpf = pCpf;
    this.dtNasc = pDTNasc;
    }

    get Cpf() {return this.cpf}
    set Cpf(pCpf) {this.cpf = pCpf}

    get DTNacs() {return this.dtNasc}
    set DTNasc(pDTNasc) {this.dtNasc = pDTNasc}

    imprimir(){
        return super.imprimir() + "\n CPF: " + this.cpf + "\n Data de Nascimento: " + this.dtNasc
    }
}

class Juridica extends Pessoa{
    constructor(pCnpj, pRsocial, pNome, pEndereco){
    super(pNome, pEndereco)
    this.cnpj = pCnpj;
    this.rsocial = pRsocial;
    }

    get Cnpj() {return this.cnpj}
    set Cnpj(pCnpj){this.cnpj = pCnpj}

    get Rsocial() {return this.rsocial}
    set Rsocial(pRsocial) {this.rsocial = pRsocial}

    imprimir(){
        return super.imprimir() + "\n CNPJ: " + this.cnpj + "\n Razão Social: " + this.rsocial
    }
}

var obj_fisica = new Fisica("258.245.874-58", "07/07/1998", "Larissa", "Rua Flor")
console.log(obj_fisica.imprimir())

var obj_juridica = new Juridica("874.875/0001-85", "MF", "Carlos", "Rua Falcão")
console.log(obj_juridica.imprimir())