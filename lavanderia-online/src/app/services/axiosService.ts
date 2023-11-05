import axios, { AxiosResponse } from "axios";
import { Observable, from } from "rxjs";
import { environment } from "../environment/environment";



export async function getData(url: string): Promise<any> {
    if (!url.endsWith("/")) {
        url.concat("/");
    }
    try {
        let data = await axios.get(environment.API_URL + url).then(response => getDataOrStatusCode(response));
        return data;
    } catch {
        try {
            environment.API_URL = "https://lavanderia-backend.onrender.com/"
            let data = await axios.get(environment.API_URL + url).then(response => getDataOrStatusCode(response));
            return data;
        } catch {
            return null;
        }
    }
}

async function getDataOrStatusCode(response: AxiosResponse<any, any>): Promise<any> {
    try {
        let data = await response.data;
        return data;
    }
    catch {
        return response.status;
    }
}

export async function postData(url: string, body: any): Promise<any> {
    if (!url.endsWith("/")) {
        url.concat("/");
    }
    try {
        let data = await axios.post(environment.API_URL + url, body,).then(response => getDataOrStatusCode(response))
            .catch((error) => {
                if (error.response) {
                    return error.response.data;
                }
            })
        return data;
    } catch {
        try {
            environment.API_URL = "https://lavanderia-backend.onrender.com/";
            let data = await axios.post(environment.API_URL + url).then(response => getDataOrStatusCode(response));
            return data;
        } catch {
            return null;
        }
    }
}


