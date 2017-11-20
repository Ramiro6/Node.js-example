import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LogsModule } from './logs/logs.modules';

// services
import { ServiceService } from './services/service.service';
import { ProtectService } from './services/protect.service';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

const router: Routes = [
  {path: '', children: []}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    LogsModule
  ],
  providers: [ServiceService, ProtectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
