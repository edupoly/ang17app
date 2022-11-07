import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularComponent } from './angular/angular.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CountriesComponent } from './countries/countries.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'courses',
    component:CoursesComponent,
    children:[
      {
        path:'angular',
        component:AngularComponent
      },
      {
        path:'react',
        component:ReactComponent
      },
    ]
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'countries',
    component:CountriesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
