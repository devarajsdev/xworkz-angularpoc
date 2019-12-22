import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';


const roots:Routes=[
  {path:"registration" ,component:RegistrationComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(roots)
  ],
   exports:[RouterModule]
})
export class RoutingModule { }
