import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn=false;
  constructor(private http:HttpClient) { }

  onLogin(){
    console.log('in login api');
    return this.http.get("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/devarajApp");
  }
}
