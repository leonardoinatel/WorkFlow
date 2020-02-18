let a;
let b;
let c;

// let soma = (a,b) => {
//     console.log(a+b)
// }

// let subtracao = (a,b) => {
//     console.log(a-b)
// }

// let divisao = (a,b) => {
//     if (a > b) {    
//             console.log(a/b)
//     }
//     else {
//             console.log(b/a)
//         }
// }

// let multiplicacao = (a,b) => {
//     console.log(a*b)
// }

// let modulo = (a,b) => {
//     console.log(a%b)
// }

// soma(10,2)
// subtracao(8,5)
// divisao(30,5)
// multiplicacao(60,2)
// modulo(5,2)

//exercicio numero 2


// let maior = (a,b) => {
//     if(a>b){
//         console.log("Esse e o maior numero: " + a)
//     }else{
//         console.log("Esse e o maior numero: " + b)
//     }
// }

// maior (30,1)

// exercicio numero 3

// let maior = (a,b,c) => {
//         if(a>b & a>c){
//             console.log("Esse e o maior numero: " + a)
//         }else if (b>a & b>c){
//             console.log("Esse e o maior numero: " + b)
//         }else{
//             console.log("Esse numero é maior: " + c)
//         }
// }
    
// maior (30,1,40)

// exercicio numero 4

// let positivo = (a) => {
//     if (a>0){
//         console.log("Numero positovo")
//     }else if (a<0){
//         console.log("Numero negativo")
//     }else {
//         console.log("Numero e igual a 0")
//     }
// }

// exercicio 5 - Faça um programa que define três variáveis com 
//os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false caso contrário.

// let angulo = (a,b,c) => {
//     if((a+b+c) === 180){
//         console.log("E um triangulo")
//     }else{
//         console.log("Nao e um triangulo")
//     }
// }



let peca;


let movimento = (peca) =>{
    if (peca === "peao" || peca === "PEAO"){
        console.log("Anda para frente")
    }else if (peca === "cavalo" || peca === "CAVALO"){
        console.log("Anda casas em L")
    }else if (peca === "torre" || peca == "TORRE"){
        console.log("Anda na horizontal e na vertical")
    }else if (peca === "bispo" || peca ==="BISPO"){
        console.log("Anda nas diagonais")
    }else if (peca === "rei" || peca === "REI"){
        console.log("Move em todas as direcoes")
    }else if (peca === "rainha" || peca === "RAINHA"){
        console.log("Se move em todas as direçoes")
    }else {
        console.log("Peca invalida, não existe")
    }
}














