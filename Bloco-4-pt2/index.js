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

let invertTriangule = (n) =>{
    let asterix = {};
    let vazio = " ";
    for(let i = n; i>0; i--){
        asterix[i] = asterix[i] + "*"
        console.log(asterix[i])
    }
    
}
invertTriangule(5)