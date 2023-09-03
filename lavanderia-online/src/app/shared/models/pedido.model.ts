export class Pedido {

    constructor(
        public numeroPedido?: number,
        public item?: string,
        public quantidade?: number,
        public valor?: number,
        public valorTotal?: number,
        public prazo?: string,
        public situacao?: string,
    ) { }
}
