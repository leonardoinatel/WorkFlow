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

let palindrome = (pali) =>{
    let aux="";
    for(let i = 0; i < pali.length; i++){
        for(let j = pali.length; j > 0; j--){
            if(pali[i]===pali[j]){
                aux = aux + pali[j]
            }
        }
    if(aux){
        return true
    }

}
console.log(palindrome("arar"))