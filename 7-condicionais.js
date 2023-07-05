console.log("Trabalhando com Condicionais.");

/* const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';
const salvador = 'Salvador'; */
const idadeComprador = 5;
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log(listaDeDestinos);
if (idadeComprador >= 18) {
	/* para deletar um item na lista */
	console.log("Comprador maior de idade.");
	listaDeDestinos.splice(1, 1); //removendo item se ele for maior de idade
} else if (estaAcompanhada) {
	console.log("Comprador está acompanhado por um maior de idade.");
	listaDeDestinos.splice(1, 1);
} else {
	console.log("Não é maior de Idade e não esta acompanhado, não vender.");
}

console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);

/* Operadores logicos encadeados */

if (idadeComprador >= 18 || estaAcompanhada==true) {
	/* para deletar um item na lista */
	console.log("Boa viagem.");
	listaDeDestinos.splice(1, 1);
} else {
	console.log("Não é maior de Idade e não esta acompanhado, não vender.");
}
console.log("Embarque: \n")
if(idadeComprador>=18 && temPassagemComprada){
    console.log("Boa Viagem.");
}else{
    console.log("Você não pode embarcar.");
}