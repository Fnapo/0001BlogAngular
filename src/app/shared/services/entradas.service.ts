import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EntradasService {

    constructor(private httpClient: HttpClient) { }

    public RecuperarEntradas(): Observable<any> {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts"); // obtener todos
    }

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
