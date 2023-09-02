export class Pessoa {
    
    constructor(
        public cpf?: string,
        public nome?: string,
        public email?: string,
        public cep?: string,
        public logradouro?: string,
        public complemento?: string,
        public cidade?: string,
        public estado?: string,
        public contato?: string,
        public senha?: string
    ) { }
}
