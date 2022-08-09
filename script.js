let idadeDependente = 13

/*if (idadeDependente >= 13){
    if (idadeDependente <= 17){
        console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu')
    } else {
        console.log('Consulte outras possibilidades')
    }
};

if (idadeDependente >= 13 && idadeDependente <=17){
     console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu')
} else { 
    console.log ('Consulte outras possibildiades')
}

// ternário

idadeDependente === 13 ? console.log ('A idade do dependete é 13 e já pode ter um cartão') : console.log ('consulte outras possibildiades');

*/
/* switch-case 

let cartao = Number(prompt("Solicitação de cartão de crédito. Esolha uma opção: \n 1- Fácil\n 2- Black \n 3- Platinum \n 4- Master Gold"));

switch (cartao){
    case 1:
        console.log('Cartão Fácil adquirido');
        break;
    case 2: 
        console.log ('Cartão Black adquirido');
        break;
    case 3: 
        console.log ('Cartão Platinum adquirido');
        break;
    case 4: 
        console.log ('Cartão Master Gold adquirido');
        break;
    default: 
        console.log ('Desculpe, não entendi, escolha uma opção válida')
}*/

let numero = Number(prompt('Insira aqui um número'));

if (numero%2===0){
    if (numero%3===0){
        console.log ('é divisível por 2 e por 3 ao mesmo tempo');
    } else { 
        console.log ('não é divisível por 2 e por 3 ao mesmo tempo');
    }
} else { 
    console.log ('não é divisível por 2 e por 3 ao mesmo tempo');
};

if (numero%2===0 && numero%3===0){
    console.log ('é divisível por 2 e por 3 ao mesmo tempo');
} else {
    console.log ('não é divisivel por 2 e por 3 ao mesmo tempo');
};

if (numero%2===0 && numero%3===0){
    numero === 30 ? console.log ('Ufa! Acertei!') : console.log('Não foi dessa vez') ;
;

switch (numero){
    case 6:
        console.log ('o número foi 6');
        break;
    case 12:
        console.log ('o número foi 12');
        break;
    case 18:
        console.log ('o número foi 18');
        break;
    case 24:
        console.log  ('o número foi 24');
        break;
    case 30:
        console.log  ('o número foi 30');
        break;
    default: 
        console.log ('o número é maior que 30 ou menor que 6');
}

} else {
    console.log ('O número não é dividível por 2 e por 3 ao mesmo tempo');
};











