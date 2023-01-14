import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEntrada } from '../../interfaces/ientrada';
import { Entrada } from '../../classes/entrada/entrada';

@Injectable({
    providedIn: 'root'
})
export class EntradasService {
    private pathURL: string = "https://my-json-server.typicode.com/Fnapo/ServerApi/entradas";
    //private pathURL: string = "http://localhost:3000/entradas";

    constructor(private httpClient: HttpClient) { }

    public RecuperarEntradas(): Observable<any> {
        return this.httpClient.get(this.pathURL)
        //return this.httpClient.get("assets/json/entradas.json");
    }

    public RecuperarEntrada(id: number): Observable<any> {
        return this.httpClient.get(`${this.pathURL}/${id}`);
    }

    public EditarEntrada(entrada: IEntrada): Observable<IEntrada> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient.put<IEntrada>(`${this.pathURL}/${entrada.id}`,
            entrada, { headers: cabecera })
    }
    //"https://jsonplaceholder.typicode.com/posts"); // obtener todos

    /*
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        obtener un recurso
    */

    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
        obtener todos los recursos
    */

    /*
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })  crear un recurso
    */

    /*
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })  modificar un recurso
    */

    /*
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    }); borrar un recurso
    */
}
