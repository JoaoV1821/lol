
import { environment } from "../environment/environment";
import axios from "axios";
import { Erro } from "../shared/models/erro.model";

export abstract class RequestMaker {

    static baseUrl = "";

    public static async getData<T>(url: string): Promise<RequestResult<T>> {
        return this.baseFunction(url, null, "get");
    }

    public static async postData<T>(url: string, body: any): Promise<RequestResult<T>> {
        return this.baseFunction(url, body, "post");
    }

    private static async baseFunction<T>(url: string, body: any, type: string): Promise<RequestResult<T>> {
        url = this.checkUrl(url);
        if (this.baseUrl == "") {
            return await this.getCurrentUrl()
                .then(
                    async () => {
                        if (this.baseUrl != "") return await this.baseFunction<T>(url, body, type);
                        else return new RequestResult<T>(0, null, null);
                    })
                .catch(() => new RequestResult<T>(0, null, null))
        }
        let response = type == "get" ? axios.get(this.baseUrl + url) : axios.post(this.baseUrl + url, body);
        let result = await response
            .then((response) => new RequestResult<T>(response.status, response.data, null))
            .catch((error) => this.handleError<T>(error));
        console.log(result);
        return result;
    }

    private static checkUrl(url: string) {
        // Permite requisições urls /exemplo ou exemplo
        if (!url.endsWith("/")) {
            url.concat("/");
        }
        return url;
    }

    private static async handleError<T>(error: any) {
        // Ocorre quando o status code é diferente de 2xx
        if (error.response) {
            return new RequestResult<T>(error.response.status, null, error.response.data)
        } else {
            return new RequestResult<T>(0, null, null);
        }
    }
    // Função para descobrir qual o domain disponível do backend
    private static async getCurrentUrl() {
        await axios.get(environment.API_URL + "/")
            .then(() => { this.baseUrl = environment.API_URL })
            .catch(async (error) => {
                if (error.request) {
                    await axios.get(environment.SECONDARY_API_URL + "/").then(() => {
                        this.baseUrl = environment.SECONDARY_API_URL;
                    }).catch(() => this.baseUrl = "")
                }
            })
    }
}

export class RequestResult<T>{

    status!: number;
    data!: T | null;
    error!: Erro;


    public constructor(status: number, data: any, error: any) {
        this.status = status;
        this.data = data;
        this.error = error;
    }
}