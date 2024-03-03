
function  isPalindrome (str){
    let l = str.length ;
    for(let i = 0; i < l;i++){
        let primeiroLetra = str [0].toLowerCase() ;
        console.log(primeiroLetra);
        let segundaLetra = str[1].toLowerCase()  
        console.log(segundaLetra);
        let segundaFrase = str[i + 2].toLowerCase() 
        console.log(segundaFrase);
        let penultimoLetra = str[l - 2].toLowerCase()
        console.log(penultimoLetra);
         let ultimaLetra = str[l - 1].toLowerCase()
        console.log(ultimaLetra);
    if (primeiroLetra == ultimaLetra && segundaLetra == penultimoLetra || segundaFrase == penultimoLetra){
        return true;
        } 
    return false
    }

}

 
function arrayMaxMin(arr){
    let novoArry = [] 
    for(let i = 0; i < arr.length ; i++){
     let maior = Math.max(...arr)
    let menor = Math.min(...arr)
    novoArry.unshift(menor)
    novoArry.push(maior)
    return novoArry
    }
  
}






