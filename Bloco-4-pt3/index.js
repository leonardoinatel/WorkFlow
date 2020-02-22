// let info = {
//     personagem: "Margarida", 
//     origem: "Pato Donald",
//     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//     recorrente: "Sim"
// };

// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim"
// };

// console.log("Bem vindo(a), ",info.personagem)
// console.log(info.recorrente)

// console.log("")
// for(let chaves in info){
//     console.log(chaves)
// }

// console.log("")
// for(let chaves in info2){
//     if(info[chaves] === info2[chaves]){
//         console.log("Ambas recorrentes")
//     }else{
//         console.log(info[chaves], " e ", info2[chaves])
//     }
// }

//1 Crie uma função que recebe uma string e retorna true se é um palíndromo ou false se não for.
//     Exemplo de palíndromo: arara.
//     verificaPalindrome("arara");
//     Retorno esperado: true
//     verificaPalindrome("desenvolvimento");
//     Retorno esperado: false



// Exercicio numero 1
// let palindrome = (pali) =>{
//     let aux = ""
//     let max = pali.length - 1
//     for(let i = 0; i < pali.length; i++){
//         if(pali[i]===pali[max-i]){       
//             aux += pali[i]
//         }else{
//             return false
//         }
//     }
//     if(aux===pali){
//         return true
//     }
// }
// console.log(palindrome("personagem"))


//Exercicio numero 2 se inverter a logica resolve o 3

// let array = (carreto) => {
//     let aux;
//     let maior = carreto[0]
//     for (let i = 1; i < carreto.length; i++){
//         if (carreto[i] > maior){
//             maior = carreto[i]
//             aux = i
//         }else{
//             aux = 0;
//         }            
//     }
//     return aux
// }

// console.log(array([35,16,3,6,7,10,11,12,13,15,17,20]))

let maiorNome = (nome) => {
    let aux;
    for (let item in nome){
        if (nome[item].length > nome[item.length]){

        }
    }
}

maiorNome(["Leonardo","Pedro","Paulo","Joao","Alberto"])







