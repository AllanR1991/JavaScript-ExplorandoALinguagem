console.log('Trabalhando com listas.');

const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';
const salvador = 'Salvador';

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
/* para inserir um item na lista */
listaDeDestinos.push('Curitiba'); 

console.log('Destinos possíveis: ');
console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos);

/* para deletar um item na lista */
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);