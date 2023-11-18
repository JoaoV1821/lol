import { Endereco } from "./endereco.model";

export class Funcionario {

    constructor(
        public cpf: string,
        public nome: string,
        public dataNasc: string,
        public email: string,
        public senha: string,
        public endereco: Endereco,
        public telefone: string,
    ) { }
}
