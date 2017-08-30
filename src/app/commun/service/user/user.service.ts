import { UserRepositoryService } from './../repository-service';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User, TypeCategorieUser } from "./../../model/user.model";

@Injectable()
export class UserService extends UserRepositoryService {


    private _categories: TypeCategorieUser[] = ['Client', 'Visiteur', 'Administrateur'];

    constructor(private _http: Http) {
        super();
    }
    
    public getUsers(): Observable<User[]> {
        return this._http.get('/api/users')
            //.delay(1000)
            .map((res: Response) => {

                return res.json().data;
            })
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    public getRoles(): Observable<string[]> {
        return Observable.of(this._categories);
    }

}
