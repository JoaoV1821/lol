import { Estado } from "./estado.model";

export class Cidade {
    constructor(
        public id?: number,
        public nomeCidade?: string,
        public estado?: Estado,
    ) { }
}
