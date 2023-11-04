import { Endereco } from "./endereco.model";

export class Cadastro {
    constructor( 
        public nome:string,
        public cpf : string,
        public telefone : string,
        public email : string,
        public endereco : Endereco)
        {}
}
