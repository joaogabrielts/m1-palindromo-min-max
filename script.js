

function isPalindrome (str){
    let resultAoContrario = ""
    let palavraAoNormal = "" 
    let len = str.length - 1
    for(let i = len; i >= 0; i--){
        resultAoContrario += str[i]    
    }
     let palavra = resultAoContrario.toLowerCase().replace(/\s/g, "") 
     console.log(palavra);
     let palavraFrase = str.toLowerCase().replace(/\s/g, "") 
    
     if(palavra === palavraFrase){
         return true
     }
     return false    
}



function arrayMaxMin(array) {
    let maiorNumero = array[0];
    let menorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        }
    }

    return [menorNumero,maiorNumero];
}






