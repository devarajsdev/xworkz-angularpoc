import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register= new FormGroup({
    firstName: new FormControl('deva'),
    lastName: new FormControl('raj'),
    mobile: new FormControl(876543456),
    email: new FormControl('dvrj@gmail.com'),
    password:new FormControl('dvrj')
  });
  constructor(private regservice:RegistrationService) {
    console.log("created the register model");
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("invoked onSubmit");
    console.log(this.register.value);
    this.regservice.onReg(this.register);
  }
}
