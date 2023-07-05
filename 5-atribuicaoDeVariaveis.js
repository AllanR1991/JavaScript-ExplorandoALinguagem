console.log('Atribuição de Variáveis.');

const idade = 31;
/* const nome = "Allan"; */
let nome = "Allan";
const sobrenome = "Rodrigues";


console.log(nome , idade);

/* Interpolação */
console.log(`Meu nome é ${nome} ${sobrenome}`);
/* Não é possivel modificar uma variavel do tipo "const", para modificar é necessario trocar de const para let */
nome = nome + sobrenome;

console.log(`Meu nome é ${nome}`);