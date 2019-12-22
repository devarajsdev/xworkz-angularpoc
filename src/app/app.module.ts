import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddappComponent } from './home/addapp/addapp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



const roots:Routes=[
  {path:"registration" ,component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[{
    path:"add",component:AddappComponent
  }]
 }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AddappComponent
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(roots),FormsModule,ReactiveFormsModule,HttpClientModule,
    MatInputModule,MatToolbarModule,MatFormFieldModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
