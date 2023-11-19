import { Endereco } from "./endereco.model";

export class UserDTO {
    constructor(public nome: string,
        public cpf: string,
        public telefone: string,
        public email: string,
        public dataNasc: string,
        public endereco: Endereco
    ) {
    }

}
