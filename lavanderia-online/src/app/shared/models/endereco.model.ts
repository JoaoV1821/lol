export class Endereco {
    constructor(
        public id?: number,
        public cep?: string,
        public logradouro?: string,
        public logNumero?: number,
        public complemento?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public residencial?: boolean
    ) { }
}
