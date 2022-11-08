import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule} from '@angular/common/http';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { Countries2Component } from './countries2/countries2.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    CoursesComponent,
    AngularComponent,
    ReactComponent,
    CountriesComponent,
    CountrydetailsComponent,
    Countries2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
