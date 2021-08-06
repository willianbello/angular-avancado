import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { LocalStorageUtils } from "../conta/utils/localstorage";

export abstract class BaseService {

    public LocalStorage = new LocalStorageUtils();
    protected urlServiceV1: string = 'https://localhost:5001/api/v1';

    protected obterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            console.log(response);
            
            if (response.statusText === 'Unknown Error') {
                customError.push('Ocorreu um erro desconhecido');
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}