//Exercicio Numero 1
// let squadAst = (n) => {
//     let asterix="";
//     for(let i=0 ; i<n ; i++){
//         asterix='';
//         for(let j = 0 ; j < n; j++){
//             asterix = asterix + "*"
//         }
//         console.log(asterix)
//     }
// }
// squadAst(5)

//Exercicio Numero 2
// let trianguleAst = (n) =>{
//     let asterix = "";
//     for(let i = 0 ; i < n; i++){
//         asterix += "*";
//         console.log(asterix) 
//     }

// }

// trianguleAst(5)

// let invertTriangule = (n) =>{
//     let asterix = ""
//     for(let i = 0; i<n; i++){
//         asterix += "*"
//     }
//     console.log(asterix)
// }
// invertTriangule(5)

// Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

let primoorNot = (a) => {
    if (a%2 != 0 && a%3 != 0 && a%4 != 0 && a%5 != 0 && a%6 !=0 && a%7 != 0 && a%8 != 0 && a%9 != 0){
        console.log("Numero "+a+" é um numero primo")
    }
    else{
        console.log("Não é um numero primo")
    }
}

primoorNot(23)