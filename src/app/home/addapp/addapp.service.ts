import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddappService {

  constructor(private http:HttpClient) { }

  onAdd(add:FormGroup){
    console.log("invoked addappservice");
    var json={"devarajApp":add.value};
    this.http.post("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/save",json).subscribe(data=>{
      console.log("data");
    
    },error=>{
      console.log("error occured"+error);
    },()=>{
        console.log("completed");
    });
  }

}

