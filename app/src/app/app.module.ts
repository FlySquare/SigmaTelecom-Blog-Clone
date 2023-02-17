import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {PostComponent} from "./pages/post/post.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
    FooterComponent,
    HomeComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'endpoint', useValue: environment.endpoint },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
