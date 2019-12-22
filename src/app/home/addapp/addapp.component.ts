import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AddappService } from './addapp.service';

@Component({
  selector: 'app-addapp',
  templateUrl: './addapp.component.html',
  styleUrls: ['./addapp.component.css']
})
export class AddappComponent implements OnInit {
  constructor(private _builder:FormBuilder,private aservice:AddappService) { }
  add= this._builder.group({
    appName:["Something"],
    appType:["I Don't Know"],
    desc:["This is X-workz"],
    date:["12-12-2012"]
  });

  onSave(){
    console.log("invoked OnAdd");
    console.log(this.add.value);
    this.aservice.onAdd(this.add);

  }


  ngOnInit() {
  }

}
