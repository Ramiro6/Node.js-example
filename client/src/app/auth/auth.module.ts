import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AuthComponent } from './components/auth.component';

const router: Routes = [
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})

export class AuthModule { }
