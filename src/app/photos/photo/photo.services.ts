import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from './photo';

const api = 'http://localhost:3000';

@Injectable({ providedIn: 'root' }) //quando for criado será em raiz
export class PhotoServices{

    constructor(private http: HttpClient) {}

    listFromUber(userName: string){
        return this.http
        .get<Photo[]>(api + '/' + userName + '/photos');
    }

    listFromUberPaginated(userName: string, page: number){

        const params = new HttpParams()
        .append('page', page.toString());

        return this.http
        .get<Photo[]>(api + '/' + userName + '/photos', { params });
    }
}