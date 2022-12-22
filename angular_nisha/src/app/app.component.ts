// first you have to create class like typescript class

// class AppComponent {

// }
// so this class i have to use another file so we have mark as a public we have to use export
// keyboard over here so that you can import from any another file


// export class AppComponent{}

// that above one is just typescript class 

// to make it angular component you have to attach a metadata with the help of decorator

// so you have to attach Component decorator

// all decorators are in angular is methods

// this decorator is pre-defined from angular so you need to import the comppnent

import { Component } from '@angular/core';
@Component({
  // each decorator will have certain metadata so that metadata you have to define with the help of 
  // property
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular_nisha';
// }
