export class Roupa {
    constructor(
        public numero: number,
        public descricao: string,
        public valor: number,
        public numeroCategoria: string,
        public categoria: string,
        public tempoDeLavagem: number
    ) { }

    static getNumberAsString(numero: number) {
        let number = numero.toString();
        while (number.length < 4) {
            number = "0" + number;
        }
        return number;
    }
}
