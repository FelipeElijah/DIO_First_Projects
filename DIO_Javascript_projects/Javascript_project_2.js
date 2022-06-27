function compararValores(n1,n2){
    if(!n1 && !n2) return 'Coloque dois números diferens de zero!';
    const conferindoNumeros = confereNumeros(n1,n2);
    return  `${conferindoNumeros}`;
}

function confereNumeros(n1,n2){
    
    let ConferindoNumeros='os numeros n1 e n2';
    let SegundaFrase='e a soma dos numeros n1 e n2 é igual a';
    let comparaCom10= 'menor';
    let comparaCom20= 'menor';
    let nao= 'não';

    const somatorio= n1+n2;

    n1==n2? nao='' : nao='não';
    somatorio>10 && somatorio!=10? comparaCom10='maior': comparaCom10= 'menor';
    somatorio>20 && somatorio!=20? comparaCom20='maior': comparaCom20= 'menor'; 

    return `${ConferindoNumeros} ${nao} são iguais, ${SegundaFrase} ${somatorio} e é ${comparaCom10} que 10 e é ${comparaCom20} que 20`;

}

console.log(compararValores(5,10));
