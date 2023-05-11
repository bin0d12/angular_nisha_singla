import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms'
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  counter: number = 0
  email  = new FormControl('')
  userProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    email: new FormControl('')
  })
  userProfileFormUsingFb =  this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      houseNo: ['', Validators.required],
      city: [''],
      state: [''],
      pin: ['']
    }),
    mobiles : this.fb.array([
      this.fb.control('')
    ])
  })
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  //  this.updateEmail()
  }
  updateEmail(){
      this.email.setValue('test@gmail.com')
  }
  onSubmit(){
    console.log(this.userProfileForm.value);
    console.log(this.userProfileForm.controls['firstName'].value);
    console.log(this.userProfileForm.get('firstName')?.value);
  }
  onSubmitUsingFb(){
    console.log(this.userProfileFormUsingFb.value);
    var firstName = this.userProfileFormUsingFb.controls['firstName'].value;
    var lastName = this.userProfileFormUsingFb.get('lastName')?.value;
    console.log(firstName, lastName );
    console.log(this.userProfileFormUsingFb.get(['address', 'houseNo'])?.value, "addresssssss");
    console.log(this.userProfileFormUsingFb.get('address')?.get('city')?.value, "addresssssss2222");
this.counter = 0
    // console.log(this.userProfileFormUsingFb.get(['mobiles', '0'])?.value, "this is first mobile number");
    for(let mob of this.mobiles.controls){
      console.log('mobiles' + this.userProfileFormUsingFb.get(['mobiles', this.counter])?.value, "multiple values");
      this.counter = this.counter + 1
    }
    
  }
  updatePartial(){
    this.userProfileFormUsingFb.patchValue({
      firstName: "binod",
      address: {
        houseNo: '143'
      }
    })
  }
  get mobiles (){
    return this.userProfileFormUsingFb.get('mobiles') as FormArray;
  }
  addNewMobile(){
    this.mobiles.push(this.fb.control(''));
  }

}
