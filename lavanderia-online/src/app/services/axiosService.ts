import axios, { AxiosResponse } from "axios";
import { Observable, from } from "rxjs";
import { environment } from "../environment/environment";

export function getData(url:string):null|Observable<any>{
    try{
        let data = axios.get(environment.API_URL + url).then(response=> getDataOrStatusCode(response));    
        return from(data);
    }catch{
        try{
            environment.API_URL = "https://lavanderia-backend.onrender.com/"
            let data = axios.get(environment.API_URL + url).then(response=> getDataOrStatusCode(response));
            return from(data);
        }catch{
            return null;
        }
    }  
}

async function getDataOrStatusCode(response:AxiosResponse<any,any>):Promise<any>{
    try{
        let data = await response.data;
        return data;
    }
    catch{
        return response.status;
    }
}

export function postData(url : string,body:any):null|Observable<any>{
    try{
        let data = axios.post(environment.API_URL + url,body).then( response=> getDataOrStatusCode(response));
        return from(data);
    }catch{
        try{
            environment.API_URL = "https://lavanderia-backend.onrender.com/";
            let data =  axios.get(environment.API_URL + url).then(response => getDataOrStatusCode(response));
            return from(data);
    }catch{
        return null;
    }
    }
}


