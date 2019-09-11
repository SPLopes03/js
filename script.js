// //Declarando Variaveis

// // var variavel1;
// // let variavel2;
// // const variavel3 = 12;

// //Atribuição

// // var variavel4 = 12;
// // let variavel5 = "estação hack"
// // const variavel6 = true;

// //Tipos de Dados

// // let exemplo;
// // exemplo = "André";
// // exemplo = 21;
// // exemplo = 1.60;
// // exemplo = true;
// // exemplo = false;

// // let saboresDePizza;

// // saboresDePizza = ["brocolis", "baiana", "portuguesa", "calabresa", "strogonoff"];

// // let fagner = ["Mauricio", 18, true, "Santana", ["pé de moleque", "mousse", "pudim"] ];

// // let fayra = {
// //     sobrenome: "Miranda",
// //     idade: 25,
// //     viva: true,
// //     cidade: "Osasco",
// //     hobbies: ["dança", "desenho", "leitura"],

// // };

// // let barbara = {
// //     sobrenome: "Moreira",
// //     idade: 19,
// //     viva: true,
// //     bairro: "Freguesia",
// //     hobbies: ["otaku", "dorameira", "capopeira"],
// //     amiga: fayra
// // };

// //Estruturas

// //Condição

// // if(condicao){
// //     codigo executado quando a condicao é verdadeira
// // }else{
// //     condigo a ser executadi se a condicao for falsa
// // }
// // if(condicao){

// // }else if(condicao){

// // }else{

// // }

// //entradas do navegador
//     //prompt
// //saida
//     //alert
//     //console.log

    let putUser = prompt ("Digite seu nome");
    let putSenha = prompt ("Digite sua senha");

    let senha = "alucinacao";
    let user = "coach";
    let saldo = 1000;
    let tentativa = 0;

    // if(user==putUser && senha==putSenha){
    //     alert("Parabéns você logou");
    // }else{
    //     alert("Puxa que pena");
    // }

    if(user==putUser){
        // let putSenha = prompt("digite a sua senha");
        if(senha==putSenha){
            alert("Parabéns você logou");
            let saque = Number(prompt ("Digite o valor do saque"));
            if(saldo>=saque){
                alert("Saque realizado com sucesso");
                saldo = saldo - saque;
                alert(`O seu saldo é ${saldo}`);
            }else{
                alert("Saldo insuficiente");
            }
        }else{
            alert("Senha incorreta");
        }
    }else{
        alert("Usuario incorreto");
    }
    while(tentativa <=3){
        let senhaDigitada = prompt("Senha");
        let usuarioDigitado = prompt("Usuario");
        if(senha == senhaDigitada && user == usuarioDigitado){
        alert("Logou");
        tentativa = 100;
    }else{
        alert("usuario e/ou senha inc");
        tentativa++;
        if(tentativa==4){
            alert("conta blocked!")
        }
    }       
}

//     //Estruta de Repetição
//     //Enquanto
//     //While(condicao){

    let numero = 1;
    
    while(numero <=10){
        console.log(7*numero);
        numero++; //numero = numero +1 ou numero += 1
    }
    