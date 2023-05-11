import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup ({
    user: new FormControl(''),
    password: new FormControl('')
  })
  loginUser(){
    console.log(this.loginForm.value);
    
  }
  ngOnInit(): void {
  }

}
