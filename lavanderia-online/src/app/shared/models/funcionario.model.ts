import { underline } from "pdfkit";
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
    ) {
        this.ajustarDataNasc();
    }

    private ajustarDataNasc() {
        if (this.dataNasc != null && this.dataNasc != undefined) {
            let dia = this.dataNasc.slice(0, 2);
            let mes = this.dataNasc.slice(2, 4);
            let ano = this.dataNasc.slice(4, 8);
            this.dataNasc = [ano, mes, dia].join('-');
        }
    }
}
