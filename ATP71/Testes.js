//Execute o comando npm init, para criar um novo módulo js.
//Crie duas classes, Produto e Categoria, cadas classe deve estar em um arquivo separado.
//Crie um terceiro arquivo para realizar os testes. Instancie um objeto de cada classe, atribua valores e imprima os objetos no terminal.
//Adicione os arquivos da atividade em um repositório GIT. Envie as alterações para o GitHub através dos comandos do GIT. 

import {Produto} from './Produto.js';
import {Categoria} from './Categoria.js';

const p1 = new Produto();
p1.nome = "Echo Show 10";
p1.descricao = "Robo Inteligente";
p1.valor = 1599.99;

const c1 = new Categoria();
c1.tipo = "Alexa";
c1.descricao = "Com tela e caixa de som potente";

console.log(p1);
console.log(c1);

