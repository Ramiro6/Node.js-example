import { Injectable } from '@angular/core';
import { Http, Response, Headers, } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ProtectService  {

  constructor( private http: Http,
               private route: Router ) { }

 pp() {
    const local = localStorage.getItem('token');
    if (local != null) {
        return true;
    } else {
        return false;
    }
 }


}
