class contaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia= agencia;
        this.numero= numero;
        this._saldo= 0;
        this.tipo= tipo;
    }

    get saldo (){
        return this._saldo;
    }
    set saldo (valor){
        return this._saldo = valor;
    }

    sacar (valor){
        if(this._saldo < valor){
            return "saldo insulficiente";
        }
        
        return this._saldo= this._saldo - valor;
    }

    depositar (valor){
        return this._saldo= this._saldo + valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo= 'Poupanca';
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia,numero){
        super(agencia, numero);
        this.tipo= 'Corrente';
        this._cartaoDeCredito= 0;
    }

    get cartaoDeCredito (){
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito (valor){
        return this._cartaoDeCredito = valor;
    }

    sacarCredito (valor){
        if(this._cartaoDeCredito < valor){
            return ("saldo insulficiente");
        }
        
        return this._cartaoDeCredito= this._cartaoDeCredito - valor;
    }

    depositarCredito (valor){
        return this._cartaoDeCredito= this._cartaoDeCredito + valor;
    }
}

const CorrenteTeste1 = new contaCorrente (10, 50);
