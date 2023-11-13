export class Pessoa {
    constructor(
        public id?: number,
        public cpf?: string,
        public nome?: string,
        public dataNascimento?: string,
        public cep?: string,
        public logradouro?: string,
        public logNumero?: string,
        public complemento?: string,
        public cidade?: string,
        public estado?: string,
        public contato?: string,
        public email?: string,
        public senha?: string,
        public perfil?: string,
    ) { }
}
