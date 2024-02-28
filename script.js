function isPalindrome(str){
    let l = str.length -1;
    for(let i = 0; i < l;i++){
    let x = str [l];
    let y = str [l-i];
    if (x == y){
        return true;
    }
    return false
}

}


function arrayMaxMin(arr){
    let arrNovo = []
   for(let i = 0; i < arr; i++){

    
   }
 
}
arrayMaxMin()

let arr = [1,52,59,16,13,9]
let max = Math.min(...arr)
console.log(max);



/*
O nome da função deve ser arrayMaxMin;
A função deverá receber o array por parâmetro;
Sua função deve obrigatoriamente utilizar laço de repetição para percorrer e analisar o array recebido por parâmetro;
Sua função deve retornar um novo array onde no índice 0 será apresentado o valor mínimo e no índice 1 o valor máximo.
Dicas
Utilize variáveis auxiliares para armazenar, ao longo do looping, o maior e menor número encontrados até o momento;
Inicie suas variáveis auxiliares com o número 0, visto que os números dispostos dentro do array serão sempre iguais ou maiores que 1. Ex. arr[n] >= 1;
Monte seu laço de repetição percorrendo todos os valores do array;
Monte o array de retorno com os valores armazenados nas variáveis auxiliares, mas deixe esse passo para ser executado após o laço de repetição.





Para desenvolver essa tarefa você deve cumprir alguns requisitos:

O nome da função deve ser isPalindrome;
A função deverá receber a palavra/frase por parâmetro;
A função não deve diferenciar letras maiúsculas de minusculas;
Sua função deve ser capaz de analisar frases, não apenas palavras;
Sua função deve obrigatoriamente utilizar laço de repetição para percorrer e analisar o parâmetro recebido;
Sua função deve retornar true se o parâmetro recebido for um palíndromo, e false caso não seja; */ 
// 

//[^A-Z] corresponde a tudo o que não estiver envolvido entre A e Z

//[^a-z] corresponde a tudo o que não estiver envolvido entre a e z

//[^0-9] corresponde a tudo o que não estiver envolvido entre 0 e 9

//[^_] corresponde a tudo o que não for _