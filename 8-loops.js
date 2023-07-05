console.log("\n Trabalhando com Condicionais.");

/* const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';
const salvador = 'Salvador'; */
const idadeComprador = 5;
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
let destinoExiste = false;
console.log("\nDestinos possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador <3){
    if(listaDeDestinos[contador]==destino){
        console.log("Destino existe.");
        destinoExiste = true;
        break;

    }
    contador++;
}

if(!destinoExiste){
    console.log("Destino não existe.");
}

for(let cont =0; cont<3 ; cont++){
    if(listaDeDestinos[cont]==destino){
        console.log("Destino existe.");
        destinoExiste = true;
        break;

    }
}