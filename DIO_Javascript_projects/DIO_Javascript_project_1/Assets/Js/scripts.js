var buttonLess =  document.getElementsByTagName("subtrair");
var buttonPlus =  document.getElementsByTagName("adicionar");
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber= 0 ;

function decrement(){

    if(currentNumber >= -4){
        currentNumber = currentNumber - 1 ;
        buttonLess.disabled= false;
    } else {
        buttonLess.disabled= true;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
    if(currentNumber<= 19){
        currentNumber = currentNumber + 1 ;
        buttonPlus.disabled= false;
    } else {
        buttonPlus.disabled= true;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function color(){
    if( currentNumber<=0){
        document.getElementById("currentNumber").style.color = "orange";
    }else {
        document.getElementById("currentNumber").style.color = "white";
    }
}