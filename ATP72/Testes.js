// Execute o comando npm init, para criar um novo módulo js.
// Crie as classes Pessoa, Pessoa Física e Pessoa Jurídica. Cada classe de estar em um arquivo separado. 
// As classe Pessoa deve ser a super classe das demais.
// Todos os atributos das classes devem ser privados e apenas acessíveis via métodos do tipo get e set.
// A Pessoa Física deve receber no construtor o CPF e a Pessoa Jurídica o CNPJ.
// Crie um arquivo para realizar os testes. 
// Crie uma instância de obj para cada classe, realize as atribuições utilizando os métodos e imprima os obj no terminal.

import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pf = new PessoaFisica();
pf.nome = "Dean Winchester";
pf.cpf = "111.222.333-44";
console.log("Nome:", pf.nome, "\nCPF:", pf.cpf);

const pj = new PessoaJuridica();
pj.nome = "Sam Winchester";
pf.cnpj = "11.222.333/4444-55";
console.log("Nome Juridico:", pj.nome,  "\nCNPJ:", pf.cnpj);



