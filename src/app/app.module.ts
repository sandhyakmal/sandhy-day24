import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ImagesComponent } from './images/images.component';
import { FormsModule } from '@angular/forms';
import { PbbComponent } from './components/pbb/pbb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './components/todo/todo.component';
import { MenuAppComponent } from './components/menu-app/menu-app.component';
import { CounterComponent } from './components/counter/counter.component';
import { AntrianComponent } from './components/antrian/antrian.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    GaleryComponent,
    ImagesComponent,
    PbbComponent,
    TodoComponent,
    MenuAppComponent,
    CounterComponent,
    AntrianComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
