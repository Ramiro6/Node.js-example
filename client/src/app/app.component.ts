import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public apidb: any [] = [];

  constructor( private _api: ServiceService,
               private router: Router ) {
               }

  ngOnInit() {
    this._api.getAll().subscribe( res => {
      this.apidb = res.message;
    });
  }

  logout() {
    this._api.logout();
  }

  goTo() {
    this.router.navigate(['/auth']);
  }
}
