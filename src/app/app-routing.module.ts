import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthorListComponent } from './author-list/author-list.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'books', loadChildren: './books/books.module#BooksModule', canActivate: [AuthGuard]},
  { path: 'author-list', component: AuthorListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
