// 8- Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for par. Caso contrário, ele retorna false.

let vairavelPar = (a,b,c) => {
    if (a%2 == 0 || b%2 == 0 || c%3 == 0){
        return true
    }else{
        return false
    }
}

console.log(vairavelVar(15,20,23))
// =====================================================================================================================================================================
// Bonus: use somente um if.
// 9- Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for ímpar. Caso contrário, ele retorna false.
let vairavelInpar = (a,b,c) => {
    if (a%2 == 1 || b%2 == 1 || c%3 == 1){
        return true
    }else{
        return false
    }
}


// Bonus: use somente um if.
// 10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no calculo do lucro.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// 11- Um trabalhador de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcula o líquido a ser recebido pelo trabalhador.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Um trabalhador possui o salário bruto de R$ 3.000,00, o cálculo será:

// O salário bruto está entre R$ 2.594,93 a R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?