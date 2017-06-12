import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthorListModule } from './author-list/author-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';
import { AuthGuard } from "app/auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthorListModule,
    AuthModule,
    CoreModule
  ],
  providers:[AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
