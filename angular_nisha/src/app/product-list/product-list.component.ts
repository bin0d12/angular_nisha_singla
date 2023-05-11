import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let observable = new Observable(observer => {
      console.log('observable started');   // 1st
      observer.next('Hello'),              // 2nd
      observer.next('world'),              // 3rd
      setTimeout(() => {
        observer.next('delayed message')   // 9th
        observer.complete()
      }, 2000)
      
    })
    observable.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('observable completed')    //10th  
    )
    console.log('after subscribe');       // 4th
   const promise = new Promise((resolve, reject) => {
      console.log('promise started');     // 5th
      resolve('Hello promise')            // 8th
    });
    console.log('before promise');        // 6th
    promise.then(value =>{
      console.log(value);
    }).catch(error =>{
      console.log(error);
    })
    console.log('after promise');         // 7th
    
  }
   
  
}
