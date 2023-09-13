import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/Footer/Footer.component';
import { MainComponent } from './Component/Main/Main.component';
import { ProductsComponent } from './Component/Products/Products.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './Component/Registration/Registration.component';
import { LoginComponent } from './Component/Login/Login.component';
import { NavigationComponent } from './Component/Navigation/Navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

