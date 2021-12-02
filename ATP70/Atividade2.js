//Crie um arquivo js e nele Crie duas classes, uma classe de para Pessoa e outra para Cliente.
//Crie um objeto de cada classe e imprima seus valores.

class Pessoa{
    nome;
    sobrenome;
    documento;
}

class Cliente{
    id;
}

const pessoa1 = new Pessoa();
pessoa1.nome = "Taylor";
pessoa1.sobrenome = "Swift";
pessoa1.documento = "111.222.333-44";

const cliente1 = new Cliente();
cliente1.id = "2222";

console.log(pessoa1, cliente1);
