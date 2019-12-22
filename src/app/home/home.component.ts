import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { }
  firstName;
  ngOnInit() {
    this.firstName= sessionStorage.getItem('firstName');
  }

  onAdd(){
    console.log('in on add ');
    this._router.navigate(['/home/add']);
  }

}
