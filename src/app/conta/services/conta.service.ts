import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ContaService {
    constructor(private http: HttpClient) {}

    public registrarUsuario(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(`xxx`, usuario)
            .pipe(
                map(result => {}),
                catchError()
            )

            return response;
    }

    public login(usuario: Usuario) {
        
    }
}