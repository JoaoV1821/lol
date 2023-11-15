export class Erro {

    timestamp!: string;
    status!: number
    error!: string
    message!: string
    path!: string

    constructor(timestamp: string, status: number, error: string, message: string, path: string) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.message = message;
        this.path = path;
    }
}
