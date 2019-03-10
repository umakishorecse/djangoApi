import { Component, OnInit } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sub1(e){
    e.preventDefault();
    console.log(e);
    var firstname = e.target.elements[0].value;
    var lastname  = e.target.elements[1].value;
    var emp_id    = e.target.elements[2].value;
   console.log(firstname,lastname,emp_id);
  }

}
