import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { ProtectService } from '../../services/protect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public form = { email: '', password: '' };
  public auth = { email: '', password: '' };

  constructor( private _api: ServiceService,
               private _protect: ProtectService,
               private route: Router ) {
    this.isLoggedIn();
  }
  public token = (token) => { localStorage.setItem('token', token); };

  ngOnInit() {}

  takeElement( forma: NgForm ) {
    this._api.authPost(this.form).subscribe( res => {
      console.log('send');
    });
  }

  login = ({ token }) => {
    localStorage.setItem('token', token );
  }

  singin( admin: NgForm ) {
    this._api.authSingin(this.auth).subscribe( res => {
      console.log('send');
      console.log(res.token);
      // this.login(res.token);
      // this._api.canActivate(res.token);
      this.token(res.token);
      // this.isLoggedIn();
      this.route.navigate(['/logs']);
    });
  }

  isLoggedIn() {
    console.log('seeee');

    // this._api.canActivate();
    // console.log(localStorage.getItem('token'));
    // if (localStorage.getItem('token')) {
    //   console.log('seee');
    //   this._api.canActivate( true );
    // } else {
    //   this._api.canActivate( false );
    // }
    
    // this._api.canActivate(this.login);
    return localStorage.getItem('token') !== null;
  }

}
