import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CanActivate } from '@angular/router';
import { ServiceService } from '../services/service.service';


// components
import { LogsComponent } from './components/logs.component';

const router: Routes = [
  { path: 'logs', component: LogsComponent, canActivate: [ServiceService] },
];

@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})

export class LogsModule { }
