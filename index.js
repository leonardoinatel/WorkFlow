let a;
let b;

let soma = (a,b) => {
    console.log(a+b)
}

let subtracao = (a,b) => {
    console.log(a-b)
}

let divisao = (a,b) => {
    if (a > b) {    
            console.log(a/b)
    }
    else {
            console.log(b/a)
        }
}

let multiplicacao = (a,b) => {
    console.log(a*b)
}

soma(10,2)
subtracao(8,5)
divisao(30,5)
multiplicacao(60,2)