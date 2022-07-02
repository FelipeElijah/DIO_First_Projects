const alunos=[{
 nome: 'Bob',
 nota: 10,
 idade: 11,
}, 
{
nome: 'Sofia',
nota: 8,
idade: 10,
},
{
    nome: 'João',
    nota: 3,
    idade: 12,
}
]

function aprovadosList(arr, media){ 
    let aprovados=[];

    for(i=0; i<arr.length; i++){
        const {nome,nota}=arr[i];
        if(nota>= media){
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}

console.log(aprovadosList(alunos,5));

