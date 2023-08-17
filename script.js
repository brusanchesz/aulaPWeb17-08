//AULA 17/08

//---------------------------------------------------------------------------------------------
//VARIAVEL --> é pouco tipada
const nome = "Bruna" //constante, valor nao muda 
let sobrenome //mais moderna, exige ser criada antes de usar
var idade //nao exige ser criada antes de usar (nao dá errado)


//--------------------------------------------------------------------------------------------

let numero = 100
if(numero>50){
    //SE VERDADEIRO
}else if (numero <10){
    //SE FALSO NA PRIMEIRA E VERDADEIRO NA SEGUNDA
}else {
    //SE FALSO EM AMBAS
}


//--------------------------------------------------------------------------------------------

//IF TERNARIO
//CONDIÇÃO ? VERDADEIRO : FALSO

numero>50 ? alert("Verdade") : alert ("Mentira")

//-------------------------------------------------------------------------------------------

//SWITCH CASE  ---- terminar de escrever
switch (numero){

}

//-------------------------------------------------------------------------------------------

//LAÇO DE REPETIÇÃO FOR + WHILE

//FOR - Mais organizado - Inicio e fim determinados 

// FOR (VLR_INICIAL; CONDICAO DE PARADA; INCREMENTO){}

//Incremento - função que modifica o valor da minha variável 

for (let i=0; i<10; i++){// teoricamente é para ser finito   , poderia ser i ou j 
    //Códigos incriveissss
}

//WHILE -mais maleavel - permite laços INFINITOS

//WHILE (Condição) {COMANDO QUE PROVOCA A PARADA}

while (numero>10){
    numero++ //Mesma coisa que numero = numero +1
    numero -=10 //Mesma coisa que numero = numero -10
}

//DO..WHILE

//Exemplo: Usuario digita 10 numeros e eu quero mostrar quem é o maior. Pega 10 vezes e entra no laço de repetição 

// O While é o "ENQUANTO"  e o Do..While é o "FAÇA" . Primeiro ele faz uma vez e depois ele repete a condição, e o while pode ser que ele execute ou não

do {
    console.loog(valor) //enquanto
    valor--
} while (valor>10){
    valor=5
    console.log("while")
    while (valor>10)

}// TEM QUE TERMINAR DE ESCREVER 

//-------------------------------------------------------------------------------------

//FUNÇÃO

//function nome (parametros) {codigos}

function salvar (nome, idade){// ISSO É UMA FUNÇÃO VOID, QUE NAO TEM RETORNO, ELA ESTÁ VAZIA 
    console.log(`Nome: ${nome} 
                 Idade ${idade}`) //Jeito mais atualizado, o não básico, bom para entrevistas de emprego,etc. Mostrar que sabe fazer algo diferente
} //FIM DA FUNÇÃO

salvar ("Ronan", 30)

//STRING TEMPLATE, igual nesse template com o crase, sifrão e chaves 
