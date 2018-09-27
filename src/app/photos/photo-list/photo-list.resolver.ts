import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoServices } from '../photo/photo.services';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root' })

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoServices){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
        
        const userName = route.params.userName;
        return this.service.listFromUberPaginated(userName, 1);
    }
}