import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostsService} from "./services/posts.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NewPostComponent} from "./new-post/new-post.component";
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: 'posts', component: PostListItemComponent
  },
  {
    path: 'new', component: NewPostComponent
  },
  {
    path: '', redirectTo: 'posts', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'posts'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
