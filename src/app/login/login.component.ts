import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errormsg;
  userLogin = new FormGroup({
    userId: new FormControl(""),
    password:new FormControl("")
  });

  userData:any;
  constructor(private lservice:LoginService,private _router:Router) { }

  ngOnInit() {
    this.lservice.onLogin().subscribe(data=>{
        this.userData=data['storedDataList']; 
    },
    error=>{
       console.log(error);
    },
    ()=>{
      console.log('api responce completed');
    });
  }

  login(){
    console.log('in login()');
    console.log(this.userData);
console.log('login condition starts');
    if(this.userData!=null){
      console.log('userdata is not null');
      for(let i=0;i<this.userData.length;i++){
        console.log('for loop enters to verify');
        if(this.userData[i].email!=null && this.userData[i].password!=null){
          console.log('email and pwd is not null');
          console.log(this.userLogin.get('userId').value);
          console.log(this.userLogin.get('password').value);
          if(this.userLogin.get('userId').value==this.userData[i].email && this.userLogin.get('password').value==this.userData[i].password){
            console.log("login Succesful");
            sessionStorage.setItem('firstName',this.userData[i].firstName);
            this.lservice.isLoggedIn=true;
            this._router.navigate(['home']);
          }
          else{
             this.errormsg="Login Failed";
          }
        }
      }
    }
  }

}
