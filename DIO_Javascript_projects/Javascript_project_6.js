function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa1 = {
    nome: 'Jorge',
    idade: 20,
};

const pessoa2 = {
    nome: 'Márcia',
    idade: 15,
};

const pessoa3 = {
    nome: 'Roberto',
    idade: 16,
};

console.log(calculaIdade.call(pessoa1,20));
console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.call(pessoa3,30));