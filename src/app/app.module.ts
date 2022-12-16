import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { GaleryComponent } from './galery/galery.component';
import { ImagesComponent } from './images/images.component';
import { FormsModule } from '@angular/forms';
import { PbbComponent } from './pbb/pbb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { MenuAppComponent } from './menu-app/menu-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    GaleryComponent,
    ImagesComponent,
    PbbComponent,
    TodoComponent,
    MenuAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
