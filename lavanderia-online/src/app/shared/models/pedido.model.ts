import { Cadastro } from "./cadastro.model";
import { Item } from "./item.model";

export class Pedido {

    constructor(
        public numero?: number,
        public roupas?: Item[],
        public total?: number,
        public data?: string,
        public prazo?: string,
        public status?: string,
        public cadastro?: Cadastro
    ) { }
}
