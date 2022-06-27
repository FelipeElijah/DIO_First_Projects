function Verificapalindromo(string){
    var re = /[\W_]/g;
  
    var string = string.toLowerCase().replace(re, '');

    for(let i=0; i<=string.length/2; i++){
        if(string[i] !==string[string.length-1-i]){
            return  false;
        } 
        return true;
    }
}

function Verificapalindromo2(string){
    var re= /[\W_]/g;
    string = string.toLowerCase().replace(re, '');
    return string.split("") .reverse() .join("") === string;
}

console.log(Verificapalindromo2("teste"));