import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jugador } from "../Interfaces/Jugador";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class JugadorProvider {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Jugador[]> {
        const url = environment.url + 'Jugador';
        return this.http.get<Jugador[]>(url);
    }

    create(
        nombre?: string,
        posicion?: string,
        dorsal?: number
    ) : Observable<Jugador>{
        const url = environment.url + "Jugador";
        const request = {
            "nombre": nombre,
            "posicion": posicion,
            "dorsal": dorsal
          }
        const header = { 'content-type' : 'application/json'};
        return this.http.post<Jugador>(url,request,{headers:header});
    }

    getById(id : number): Observable<Jugador>{
        const url = environment.url + "Jugador/"+id;
        return this.http.get<Jugador>(url);
    }

    edit(id?:number,
        nombre?: string,
        posicion?: string,
        dorsal?: number): Observable<Jugador>{
            const url = environment.url + "Jugador/"+id;
            const request = {
                "nombre": nombre,
                "posicion": posicion,
                "dorsal": dorsal
              }
            const header = { 'content-type' : 'application/json'};
            return this.http.put<Jugador>(url, request,{headers:header});
    }

    delete(id:number):Observable<any>{
        const url = environment.url + "Jugador/"+id;
        return this.http.delete(url);
    }
}