import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { catchError, map } from 'rxjs/operators';
import { BaseService } from "src/app/services/base.service";

@Injectable()
export class ContaService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    public registrarUsuario(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(`${this.urlServiceV1}/nova-conta`, usuario, this.obterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            )

            return response;
    }

    public login(usuario: Usuario) {
        
    }
}