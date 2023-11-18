import { Item } from "./item.model";

export class Pedido {

    constructor(
        public numero?: number,
        public itens?: Item[],
        public total?: number,
        public data?: string,
        public prazo?: string,
        public status?: string,
    ) { }
}
