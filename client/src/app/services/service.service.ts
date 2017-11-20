import { Injectable } from '@angular/core';
import { Http, Response, Headers, } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ProtectService } from './protect.service';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ServiceService implements CanActivate {

  constructor( private http: Http,
               private route: Router,
               private _protect: ProtectService ) {
                 console.log('testtttt ttt');
                 this.canActivate();
               }
  private get: string = environment.url + '/api';
  private post: string = environment.url + '/api/create';
  private take: string = environment.url + '/api/singin';

  getAll() {
    return this.http.get(this.get)
             .map( res => {
               return res.json();
             });
  }

  authPost( termino ) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.post, JSON.stringify(termino), {headers})
             .map((res: Response) => {
               return res.json();
             });
  }

  authSingin( termino ) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.take, JSON.stringify(termino), {headers})
             .map((res: Response) => {
               return res.json();
             });
  }

  canActivate() {

    this._protect.pp();
    console.log(this._protect.pp());

    if (this._protect.pp() === true) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

}
