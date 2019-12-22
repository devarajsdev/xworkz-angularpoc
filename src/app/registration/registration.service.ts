import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
details;
  constructor(private http:HttpClient) { }

  onReg(reg:FormGroup){
    console.log("invoked service onSubmit");
    var json={"devarajApp":reg.value};
    this.http.post("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/save",json).subscribe(data=>{
      console.log("response data is :"+data);
    },error=>{
      console.log("error in http");
    },()=>{
      console.log("no more data");
    });

    this.http.get("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/devarajApp").subscribe(data=>{
      console.log("return data is:"+data);
      this.details=data['storedDataList'];
      console.log(this.details)
  },error=>{
    console.log("error in http");
  },()=>{
    console.log("no more data");
  
  
    });
  }
}
