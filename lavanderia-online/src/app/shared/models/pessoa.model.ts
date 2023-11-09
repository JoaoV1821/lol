export class Pessoa {
    
    constructor(
        public id?: number,
        public nome?: string,
        public cpf?: string,
        public contato?: string,
        public email?: string,
        public cep?: string,
        public cidade?: string,
        public bairro?: string,
        public logradouro?: string,
        public logNumero?: number,
        public complemento?: string,
        public estado?: string, //
        public senha?: number //
    ) { }
}
